import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import {LogLevel, RNFFmpeg, RNFFmpegConfig} from 'react-native-ffmpeg';
import {PermissionsAndroid} from 'react-native';

class Picker {
  constructor() {}

  SnapPhoto(crop) {
    return new Promise((resolve, reject) => {
      ImagePicker.openPicker({
        cropping: crop === 'all' ? false : crop ? true : false,
        mediaType: crop == 'all' ? undefined : crop ? 'photo' : 'video',
        //openCameraOnStart: true,
        includeBase64: false,
        returnAfterShot: true,
        title: 'Selecet Photo',
        // returnAfterShot:true,
        compressQuality: 0.5,
      })
        .then((response) => {
          this.uploaded = true;
          //console.warn("opening camera")
          let temp = response.path.split('/');
          resolve({
            source: response.path,
            filename: temp[temp.length - 1],
            content_type: response.mime,
            size: response.size,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  CompressVideo(response) {
    return new Promise((resolve, reject) => {
      let size = 0;
      let file = response.source.split('/');
      let temp = file[file.length - 1].split('.');
      let ext = temp.pop();
      let nameString = temp.join('.');
      let fileinfo = {
        name: nameString,
        ext: ext,
        url: response.source,
        base: file.join('/'),
      };
      fileinfo.response =
        fileinfo.base + '/' + fileinfo.name + '_wb_compress.' + fileinfo.ext;
      RNFFmpeg.executeWithArguments([
        '-i',
        fileinfo.url.replace('file://', ''),
        '-c:v',
        'mpeg4',
        fileinfo.response.replace('file://', ''),
      ]).then((result) => {
        this.uploaded = true;
        //console.warn("opening camera")
        //let temp = response.source.split('/');
        RNFFmpegConfig.resetStatistics();
        resolve({
          source: fileinfo.response,
          filename: response.filename,
          content_type: response.content_type,
          size: size,
        });
      });
    });
  }
  resizePhoto(file) {
    return new Promise((resolve, reject) => {
      let temp = file.split('.');
      temp[temp.length - 2] = temp[temp.length - 2] + '_compress';
      let compressed = temp.join('.');
      RNFFmpeg.executeWithArguments([
        '-i',
        file.replace('file://', ''),
        '-vf',
        'scale=300:-1',
        compressed.replace('file://', ''),
      ])
        .then(() => {
          resolve(compressed);
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }
  CancleCompression() {
    RNFFmpeg.cancel();
  }
  SnapVideo() {
    return new Promise((resolve, reject) => {
      ImagePicker.openPicker({
        cropping: false,
        //isCamera: true,
        mediaType: 'video',
        //openCameraOnStart: true,
        includeBase64: false,
        returnAfterShot: true,
        title: 'Select A Video',
        // returnAfterShot:true,
        compressQuality: 0.5,
      })
        .then((response) => {
          console.warn(response);
          let temp = response.path.split('/');
          resolve({
            source: response.path,
            filename: temp[temp.length - 1],
            content_type: response.mime,
            size: response.size,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }
  TakeManyPhotos() {
    return new Promise((resolve, reject) => {
      ImagePicker.openPicker({
        cropping: false,
        includeBase64: false,
        compressQuality: 50,
        mediaType: 'photo',
        multipleShot: false,
        multiple: true,
        maxSize: 20,
        spanCount: 3,
        title: 'Select Photos',
        imageLoader: 'PICASSO',
      })
        .then((resps) => {
          this.uploaded = true;
          resolve(
            resps.map((ele) => {
              return {
                filename: ele.path.split('/')[ele.path.split('/').length - 1],
                content_type: ele.mime,
                source: ele.path,
                size: ele.size,
              };
            }),
          );
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }
  async TakeAudio() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      return res;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        return null;
      } else {
        throw err;
      }
    }
  }
  async TakeFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      //res.uri = res.uri.replace('content://', 'file://')
      return res;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        return null;
      } else {
        throw err;
      }
    }
  }
  openFile(source) {
    FileViewer.open(
      source,
    ).then(
      () => {},
    ); /*.catch((e) => {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.MANAGE_DOCUMENTS, {
                title: "Write To Storage Permission",
                message: "Bleashup Wants to write to disk"
            }).then(pers => {
                console.warn(pers)
            })
        })*/
  }
  CleanAll() {
    if (this.uploaded) {
      ImagePicker.clean().then(() => {
        this.uploaded = false;
      });
    }
  }
}
const Pickers = new Picker();
export default Pickers;

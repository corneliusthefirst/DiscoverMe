/* eslint-disable prettier/prettier */
import { observable, action } from 'mobx';

class  screenLanguage {

 englishMode = ['Change Mode','Change Language','Discovery Web','Masked Stories','Settings','Red Mode','Dark Mode','White Mode','Green Mode','Home','Discoveries','Discover','Stories Store','+  photo to story','+  video to story','Take from Gallery','Take from Camera','Photo for story uploaded','Video for story uploaded','write something ...',
'English','Mandarin Chinese','Hindi','Spanish','French','German','Russian','Japanese','Portuguese','Bengali','Indonesian','Total views :','Retry','Participants','Profile','Age','My Stories','Messages','CURRENT REMINDS','Vote Board','Active','Received','Edit My Profile','Max Age For Discovery','Male','Female','Any','Prefered Gender For Discovery','Name','UserName','Bio','Email Address',
'Phone Number','Number Of Participations','Dashboard','New Vote','Posted','Photo','Any reason for refusal','Save','Deny','None','Accept','Edit  Remind','New  Remind','Remind  Message  To  Set  For','To All', 'Choose Participant','Categories','Repeat','Daily','Weekly','Monthly','Yearly','For Daily this Remind would occur everyday at','For Weekly this Remind would occur every week on',
'For Monthly this Remind would occur every month on the','For Yearly this Remind would occur every year on the','Choose Participants'];
 mandarinChineseMode = ['变更模式','改变语言','Discovery Web','蒙版故事','设定值','红色模式','黑暗模式','白色模式','绿色模式','首页','发现','发现','故事商店','+照片转故事','+视频转故事','从画廊取','从照相机取','照片上传至故事','视频上传至故事','写消息”。 ..','英语','普通话','印地语','西班牙语','法语','德语','俄语','日语','葡萄牙语','孟加拉语','印度尼西亚语'];
 hindiMode = ['मोड बदलें','भाषा बदलो','Discovery Web','नकाबपोश कहानियां','समायोजन','रेड मोड', 'डार्क मोड', 'व्हाइट मोड', 'ग्रीन मोड','Home','खोजों','डिस्कवर','Stories Store','+ फोटो टू स्टोरी', '+ वीडियो टू स्टोरी', 'टेक फ्रॉम गैलरी', 'टेक फ्रॉम कैमरा', 'फोटो फॉर स्टोरी अपलोड', 'वीडियो फॉर स्टोरी अपलोड', 'कुछ लिखो ...',
 'अंग्रेजी', 'मंदारिन चीनी', 'हिंदी', 'स्पेनिश', 'फ्रेंच', 'जर्मन', 'रूसी', 'जापानी', 'पुर्तगाली', 'बंगाली', 'इंडोनेशियाई'];
 spanishMode =['Modo de cambio','Cambiar idioma','Discovery Web','Historias enmascaradas','Configuraciones','Modo rojo', 'Modo oscuro', 'Modo blanco', 'Modo verde','Inicio', 'Descubrimientos', 'Descubrir','Tienda de historias','+ foto a la historia','+ video a la historia','Tomar de la galería', 'Tomar de la cámara','Foto de historia cargada', 'Video de historia cargada', 'escribe algo ...',
 'Inglés', 'chino mandarín', 'hindi', 'español', 'francés', 'alemán', 'ruso', 'japonés', 'portugués', 'bengalí', 'indonesio'];
 frenchMode = ['Changer de mode','Changer de langue','Discovery Web','Stories Masquée','Paramètres','Mode rouge', 'Mode sombre', 'Mode blanc', 'Mode vert','Accueil', 'Découvertes', 'Découvrir','Stories Store','+ photo à la story', '+ vidéo à la story', 'Prendre de la galerie', 'Prendre de la caméra', 'Photo pour la story téléchargée', 'Vidéo pour la story téléchargée', 'écrire quelque chose .. . ',
 'Anglais', 'Chinois mandarin', 'Hindi', 'Espagnol', 'Français', 'Allemand', 'Russe', 'Japonais', 'Portugais', 'Bengali', 'Indonésien','Vues Total','Ressayer','Participants','Profil','Age','My Stories','Messages','Rappel Courant'];
 germanMode =['Modus ändern','Sprache ändern','Discovery Web','Maskierte Geschichten','die Einstellungen','Roter Modus', 'Dunkler Modus', 'Weißer Modus', 'Grüner Modus','Zuhause', 'Entdeckungen', 'entdecken','Stories Store', '+ Foto zu Geschichte', '+ Video zu Geschichte', 'Aus Galerie nehmen', 'Von Kamera aufnehmen', 'Foto für Geschichte hochgeladen', 'Video für Geschichte hochgeladen', 'etwas schreiben .. . ',
 'Englisch', 'Mandarin Chinesisch', 'Hindi', 'Spanisch', 'Französisch', 'Deutsch', 'Russisch', 'Japanisch', 'Portugiesisch', 'Bengali', 'Indonesisch'];
 russianMode = ['Изменить режим','Изменить язык','Discovery Web','Маскированные истории','настройки','Красный режим','Темный режим','Белый режим','Зеленый режим','Дом','открытия','открой','Магазин историй','+ фото в рассказ','+ видео в рассказ','Взять из галереи','Взять из камеры','Фото для загруженного рассказа','Видео для загруженного рассказа', 'написать что-нибудь .. .',
 'Английский','Китайский мандарин','Хинди','Испанский','Французский','Немецкий','Русский','Японский','Португальский','Бенгальский','Индонезийский'];
 japaneseMode = ['モードの​​変','言語の変更','Discovery Web','仮面の物語','設定','レッドモード','ダークモード','ホワイトモード','グリーンモード','ホーム','発見','発見','ストーリーストア','+ストーリーへの写真','+ストーリーへのビデオ','ギャラリーから撮る','カメラから撮る','アップロードされたストーリーの写真','アップロードされたストーリーの動画','何かを書く」 ...',
 '英語','北京語','ヒンディー語','スペイン語','フランス語','ドイツ語','ロシア語','日本語','ポルトガル語','ベンガル語','インドネシア語'];
 portugueseMode = ['Alterar modo', 'Mudar idioma', 'Discovery Web','Histórias Mascaradas', 'Definições','Modo vermelho', 'Modo escuro', 'Modo branco', 'Modo verde','Casa', 'descobertas', 'descoberta','Loja de histórias', '+ foto para história', '+ vídeo para história', 'Upload da Galeria', 'Upload da câmera', 'Foto para história carregada', 'Vídeo para história carregada', 'escreva algo .. . ',
 'Inglês', 'chinês mandarim', 'hindi', 'espanhol', 'francês', 'alemão', 'russo', 'japonês', 'português', 'bengali', 'indonésio']
 bengaliMode = ['পরিবর্তন মোড', 'ভাষা পরিবর্তন করুন', 'Discovery Web','মুখোশযুক্ত গল্প', 'সেটিংস','রেড মোড', 'ডার্ক মোড', 'হোয়াইট মোড', 'গ্রিন মোড','হোম', 'আবিষ্কার', 'আবিষ্কার','গল্পের স্টোর', '+ গল্প থেকে ছবি', 'গল্প থেকে ভিডিও', 'গ্যালারী থেকে আপলোড', 'ক্যামেরা থেকে আপলোড', 'গল্পের জন্য ছবি আপলোড', 'গল্পের জন্য ভিডিও আপলোড', 'কিছু লিখুন ...',
 'ইংরেজি', 'ম্যান্ডারিন চাইনিজ', 'হিন্দি', 'স্প্যানিশ', 'ফরাসি', 'জার্মান', 'রাশিয়ান', 'জাপানি', 'পর্তুগিজ', 'বাঙালি', 'ইন্দোনেশিয়ান']
 indonesianMode = ['Ubah Mode', 'Ubah Bahasa', 'Discovery Web','Cerita Bertopeng', 'Pengaturan','Mode Merah', 'Mode Gelap', 'Mode Putih', 'Mode Hijau','Rumah', 'penemuan', 'temukan','Stories Store', '+ foto ke cerita', '+ video ke cerita', 'Unggah dari Galeri', 'Unggah dari Kamera', 'Foto untuk cerita diunggah', 'Video untuk kisah diunggah', 'tulis sesuatu .. . ',
 'Bahasa Inggris', 'Mandarin Mandarin', 'Hindi', 'Spanyol', 'Prancis', 'Jerman', 'Rusia', 'Jepang', 'Portugis', 'Bengali', 'Indonesia']


 @observable currentlang = {};

 @action setLanguage = (language)=>{
      var newLang = [];

      switch (language) {
        case 'English':
            newLang = this.englishMode;
            break;
        case 'Mandarin Chinese':
            newLang = this.mandarinChineseMode;
            break;
        case 'Hindi':
            newLang = this.hindiMode;
            break;
        case 'Spanish':
            newLang = this.spanishMode;
            break;
        case 'French':
            newLang = this.frenchMode;
            break;
        case 'German':
            newLang = this.germanMode;
            break;
        case 'Russian':
            newLang = this.russianMode;
            break;
        case 'Japanese':
            newLang = this.japaneseMode;
            break;
        case 'Portuguese':
            newLang = this.portugueseMode;
            break;
        case 'Bengali':
            newLang = this.bengaliMode;
            break;
        case 'Indonesian':
            newLang = this.indonesianMode;
      }


      this.currentlang = {
        //viewed onclick threedot home page
        ChangeMode:newLang[0],
        ChangeLanguage:newLang[1],
        DiscoveryWeb:newLang[2],
        MaskedStories:newLang[3],
        Settings:newLang[4],
        //changeMode page color modes
        RedMode:newLang[5],
        DarkMode:newLang[6],
        WhiteMode:newLang[7],
        GreenMode:newLang[8],
        //home bottomBar
        Home:newLang[9],
        Discoveries:newLang[10],
        Discover:newLang[11],
        StoriesStore:newLang[12],
        PhotoToStory:newLang[13],
        VideoToStory:newLang[14],
        TakeFromGallery:newLang[15],
        TakeFromCamera:newLang[16],
        PhotoForStoryUploaded:newLang[17],
        VideoForStoryUploaded:newLang[18],
        WriteSomething:newLang[19],
        //languages name block
        English:newLang[20],
        MandarinChinese:newLang[21],
        Hindi:newLang[22],
        Spanish:newLang[23],
        French:newLang[24],
        German:newLang[25],
        Russian:newLang[26],
        Japanese:newLang[27],
        Portuguese:newLang[28],
        Bengali:newLang[29],
        Indonesian:newLang[30],
        //end of block
        TotalViews:newLang[31],
        Retry:newLang[32],
        Participants:newLang[33],
        Profile:newLang[34],
        Age:newLang[35],
        MyStories:newLang[36],
        Messages:newLang[37],
        CurrentReminds:newLang[38],
        VoteBoard:newLang[39],
        Active:newLang[40],
        Received:newLang[41],
        ModifyProfile:newLang[42],
        MaxAgeOfDiscovery:newLang[43],
        Male:newLang[44],
        Female:newLang[45],
        Any:newLang[46],
        PreferedGenderForDiscovery:newLang[47],
        Name:newLang[48],
        UserName:newLang[49],
        Bio:newLang[50],
        EmailAddress:newLang[51],
        PhoneNumber:newLang[52],
        NoOfParticipations:newLang[53],
        DashBoard:newLang[54],
        NewVote:newLang[55],
        Posted:newLang[56],
        Photo:newLang[57],
        RefusalMessage:newLang[58],
        Save:newLang[59],
        Deny:newLang[60],
        None:newLang[61],
        Accept:newLang[62],
        EditRemind: newLang[63],
        NewRemind: newLang[64],
        RemindMessageToSetFor: newLang[65],
        ToAll: newLang[66],
        ChooseParticipant: newLang[67],
        Categories: newLang[68],
        Repeat: newLang[69],
        Daily: newLang[70],
        Weekly: newLang[71],
        Monthly: newLang[72],
        Yearly: newLang[73],
        DailyInfo: newLang[74],
        WeeklyInfo: newLang[75],
        MonthlyInfo: newLang[76],
        YearlyInfo: newLang[77],
        ChooseParticipants: newLang[78],
    };
 };
}

const ScreenLanguage = new screenLanguage();
export default ScreenLanguage;


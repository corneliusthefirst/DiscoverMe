/* eslint-disable prettier/prettier */
import stores from '../stores';
import { observer } from 'mobx-react';


//@observer
class  screenLanguage {

    constructor(){ }

    ChangeMode = {
        English:'Change Mode',
        MandarinChinese:'变更模式',
        Hindi:'मोड बदलें',
        Spanish:'Modo de cambio',
        French:'Changer de mode',
        German:'Modus ändern',
        Russian:'Изменить режим',
        Japanese:'モードの​​変',
        Portuguese:'Alterar modo',
        Bengali:'পরিবর্তন মোড',
        Indonesian:'Ubah Mode',
    }[stores.CurrentScreenLanguage.currentlanguage];

    ChangeLanguage = {
        English:'Change Language',
        MandarinChinese:'改变语言',
        Hindi:'भाषा बदलो',
        Spanish:'Cambiar idioma',
        French:'Changer de langue',
        German:'Sprache ändern',
        Russian:'Изменить язык',
        Japanese:'言語の変更',
        Portuguese:'Mudar idioma',
        Bengali:'ভাষা পরিবর্তন করুন',
        Indonesian:'Ubah Bahasa',
    }[stores.CurrentScreenLanguage.currentlanguage];

    DiscoveryWeb = {
        English:'Discovery Web',
        MandarinChinese:'Discovery Web',
        Hindi:'Discovery Web',
        Spanish:'Discovery Web',
        French:'Discovery Web',
        German:'Discovery Web',
        Russian:'Discovery Web',
        Japanese:'Discovery Web',
        Portuguese:'Discovery Web',
        Bengali:'Discovery Web',
        Indonesian:'Discovery Web',
    }[stores.CurrentScreenLanguage.currentlanguage];

    MaskedStories = {
        English:'Masked Stories',
        MandarinChinese:'蒙版故事',
        Hindi:'नकाबपोश कहानियां',
        Spanish:'Historias enmascaradas',
        French:'Stories Masquée',
        German:'Maskierte Geschichten',
        Russian:'Маскированные истории',
        Japanese:'仮面の物語',
        Portuguese:'Histórias Mascaradas',
        Bengali:'মুখোশযুক্ত গল্প',
        Indonesian:'Cerita Bertopeng',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Settings = {
        English:'Settings',
        MandarinChinese:'设定值',
        Hindi:'समायोजन',
        Spanish:'Configuraciones',
        French:'Paramètres',
        German:'die Einstellungen',
        Russian:'настройки',
        Japanese:'設定',
        Portuguese:'Definições',
        Bengali:'সেটিংস',
        Indonesian:'Pengaturan',
    }[stores.CurrentScreenLanguage.currentlanguage];

    RedMode = {
        English:'Red Mode',
        MandarinChinese:'红色模式',
        Hindi:'रेड मोड',
        Spanish:'Modo rojo',
        French:'Mode rouge',
        German:'Roter Modus',
        Russian:'Красный режим',
        Japanese:'レッドモード',
        Portuguese:'Modo vermelho',
        Bengali:'রেড মোড',
        Indonesian:'Mode Merah',
    }[stores.CurrentScreenLanguage.currentlanguage];

    DarkMode = {
        English:'Dark Mode',
        MandarinChinese:'黑暗模式',
        Hindi: 'डार्क मोड',
        Spanish: 'Modo oscuro',
        French:'Mode sombre',
        German:'Dunkler Modus',
        Russian:'Weißer Modus',
        Japanese:'ダークモード',
        Portuguese:'Modo escuro',
        Bengali:'ডার্ক মোড',
        Indonesian:'Mode Gelap',
    }[stores.CurrentScreenLanguage.currentlanguage];

    WhiteMode = {
        English:'Blue Mode',
        MandarinChinese:'蓝色模式',
        Hindi:'ब्लू मोड',
        Spanish:'Modo azul',
        French:'Mode bleu',
        German: 'Blauer Modus',
        Russian:'Синий режим',
        Japanese:'ブルーモード',
        Portuguese:'Modo Azul',
        Bengali:'নীল মোড',
        Indonesian:'Mode Biru',
    }[stores.CurrentScreenLanguage.currentlanguage];

    GreenMode = {
        English:'Green Mode',
        MandarinChinese:'绿色模式',
        Hindi:'ग्रीन मोड',
        Spanish:'Modo verde',
        French:'Mode vert',
        German: 'Zuhause',
        Russian:'Белый режим',
        Japanese:'グリーンモード',
        Portuguese:'Modo verde',
        Bengali: 'গ্রিন মোড',
        Indonesian:'Mode Hijau',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Home = {
        English:'Home',
        MandarinChinese:'首页',
        Hindi:'Home',
        Spanish:'Inicio',
        French:'Accueil',
        German:'Entdeckungen',
        Russian:'Зеленый режим',
        Japanese:'ホーム',
        Portuguese:'Casa',
        Bengali: 'হোম',
        Indonesian:'Rumah',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Discoveries = {
        English:'Discoveries',
        MandarinChinese:'发现',
        Hindi:'खोजों',
        Spanish:'Descubrimientos',
        French:'Découvertes',
        German:'entdecken',
        Russian:'Дом',
        Japanese:'発見',
        Portuguese:'descobertas',
        Bengali:'আবিষ্কার',
        Indonesian:'penemuan',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Discover = {
        English:'Discover',
        MandarinChinese:'发现',
        Hindi:'डिस्कवर',
        Spanish:'Descubrir',
        French:'Découvrir',
        German:'Discover',
        Russian:'открытия',
        Japanese:'発見',
        Portuguese: 'descoberta',
        Bengali:'আবিষ্কার',
        Indonesian:'temukan',
    }[stores.CurrentScreenLanguage.currentlanguage];

    StoriesStore = {
        English:'Stories Store',
        MandarinChinese:'故事商店',
        Hindi:'Stories Store',
        Spanish:'Tienda de historias',
        French:'Stories Store',
        German:'Stories Store',
        Russian:'Магазин историй',
        Japanese:'ストーリーストア',
        Portuguese:'Loja de histórias',
        Bengali:'গল্পের স্টোর',
        Indonesian:'Stories Store',
    }[stores.CurrentScreenLanguage.currentlanguage];

    phototostory = {
        English:'photo to story',
        MandarinChinese:'照片转故事',
        Hindi:'+ फोटो टू स्टोरी',
        Spanish:'+ foto a la historia',
        French: '+ photo à la story',
        German:'+ Foto zu Geschichte',
        Russian:'+ фото в рассказ',
        Japanese:'+ストーリーへの写真',
        Portuguese:'+ foto para história',
        Bengali:'+ গল্প থেকে ছবি',
        Indonesian:'+ foto ke cerita',
    }[stores.CurrentScreenLanguage.currentlanguage];

    videotostory = {
        English:'video to story',
        MandarinChinese:'+视频转故事',
        Hindi: 'वीडियो टू स्टोरी',
        Spanish:'video a la historia',
        French: 'vidéo à la story',
        German:'Video zu Geschichte',
        Russian:'видео в рассказ',
        Japanese:'ストーリーへのビデオ',
        Portuguese: 'vídeo para história',
        Bengali:'গল্প থেকে ভিডিও',
        Indonesian:'video ke cerita',
    }[stores.CurrentScreenLanguage.currentlanguage];

    TakefromGallery = {
        English:'Take from Gallery',
        MandarinChinese:'从画廊取',
        Hindi:'टेक फ्रॉम गैलरी',
        Spanish: 'Tomar de la galería',
        French:'Prendre de la galerie',
        German: 'Aus Galerie nehmen',
        Russian:'Взять из галереи',
        Japanese:'ギャラリーから撮る',
        Portuguese:'Upload da Galeria',
        Bengali:'গ্যালারী থেকে আপলোড',
        Indonesian:'Unggah dari Galeri',
    }[stores.CurrentScreenLanguage.currentlanguage];

    TakefromCamera = {
        English:'Take from Camera',
        MandarinChinese:'从照相机取',
        Hindi: 'टेक फ्रॉम कैमरा',
        Spanish:'Tomar de la cámara',
        French:'Prendre de la caméra',
        German:'Von Kamera aufnehmen',
        Russian:'Взять из камеры',
        Japanese:'カメラから撮る',
        Portuguese:'Upload da câmera',
        Bengali:'ক্যামেরা থেকে আপলোড',
        Indonesian:'Unggah dari Kamera',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Photoforstoryuploaded = {
        English:'Photo for story uploaded',
        MandarinChinese:'照片上传至故事',
        Hindi:'फोटो फॉर स्टोरी अपलोड',
        Spanish:'Foto de historia cargada',
        French:'Photo pour la story téléchargée',
        German:'Foto für Geschichte hochgeladen',
        Russian:'Фото для загруженного рассказа',
        Japanese:'アップロードされたストーリーの写真',
        Portuguese:'Foto para história carregada',
        Bengali: 'গল্পের জন্য ছবি আপলোড',
        Indonesian:'Foto untuk cerita diunggah',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Videoforstoryuploaded = {
        English:'Video for story uploaded',
        MandarinChinese:'视频上传至故事',
        Hindi:'वीडियो फॉर स्टोरी अपलोड',
        Spanish:'Video de historia cargada',
        French:'Vidéo pour la story téléchargée',
        German:'Video für Geschichte hochgeladen',
        Russian:'Видео для загруженного рассказа',
        Japanese:'アップロードされたストーリーの動画',
        Portuguese:'Vídeo para história carregada',
        Bengali:'গল্পের জন্য ভিডিও আপলোড',
        Indonesian:'Video untuk kisah diunggah',
    }[stores.CurrentScreenLanguage.currentlanguage];

    writesomething = {
        English:'write something ...',
        MandarinChinese:'写消息”。 ..',
        Hindi:'कुछ लिखो ...',
        Spanish:'escribe algo ...',
        French:'écrire quelque chose .. . ',
        German:'etwas schreiben .. . ',
        Russian:'написать что-нибудь .. .',
        Japanese:'何かを書く」 ...',
        Portuguese:'escreva algo .. . ',
        Bengali:'কিছু লিখুন ...',
        Indonesian:'tulis sesuatu .. . ',
    }[stores.CurrentScreenLanguage.currentlanguage];

    English = {
        English:'English',
        MandarinChinese:'英语',
        Hindi:'अंग्रेजी',
        Spanish:'Inglés',
        French:'Anglais',
        German:'Englisch',
        Russian:'Английский',
        Japanese:'英語',
        Portuguese: 'Inglês',
        Bengali:'ইংরেজি',
        Indonesian: 'Bahasa Inggris',
    }[stores.CurrentScreenLanguage.currentlanguage];

    MandarinChinese = {
        English:'Mandarin Chinese',
        MandarinChinese:'普通话',
        Hindi:'मंदारिन चीनी',
        Spanish: 'chino mandarín',
        French:'Chinois mandarin',
        German:'Mandarin Chinesisch',
        Russian:'Китайский мандарин',
        Japanese: '北京語',
        Portuguese:'chinês mandarim',
        Bengali:'ম্যান্ডারিন চাইনিজ',
        Indonesian:'Mandarin Mandarin',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Hindi= {
        English:'Hindi',
        MandarinChinese:'印地语',
        Hindi:'हिंदी',
        Spanish:'Hindi',
        French:'Hindi',
        German:'Hindi',
        Russian:'Хинди',
        Japanese:'ヒンディー語',
        Portuguese:'hindi',
        Bengali:'হিন্দি',
        Indonesian:'Hindi',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Spanish = {
        English:'Spanish',
        MandarinChinese:'西班牙语',
        Hindi: 'स्पेनिश',
        Spanish:'español',
        French: 'Espagnol',
        German:'Spanisch',
        Russian: 'Испанский',
        Japanese:'スペイン語',
        Portuguese:'espanhol',
        Bengali:'স্প্যানিশ',
        Indonesian:'Spanyol',
    }[stores.CurrentScreenLanguage.currentlanguage];

    French = {
        English:'French',
        MandarinChinese:'西班牙语',
        Hindi:'फ्रेंच',
        Spanish: 'francés',
        French:'Français',
        German: 'Französisch',
        Russian:'Французский',
        Japanese:'フランス語',
        Portuguese:'francês',
        Bengali:'ফরাসি',
        Indonesian:'Prancis',
    }[stores.CurrentScreenLanguage.currentlanguage];

    German = {
        English:'German',
        MandarinChinese:'法语',
        Hindi:'जर्मन',
        Spanish:'alemán',
        French:'Allemand',
        German:'Deutsch',
        Russian:'Немецкий',
        Japanese:'ドイツ語',
        Portuguese:'alemão',
        Bengali:'জার্মান',
        Indonesian:'Jerman',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Russian = {
        English:'Russian',
        MandarinChinese:'德语',
        Hindi: 'रूसी',
        Spanish:'ruso',
        French: 'Russe',
        German:'Russisch',
        Russian:'Русский',
        Japanese:'ロシア語',
        Portuguese:'russo',
        Bengali:'রাশিয়ান',
        Indonesian:'Rusia',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Japanese = {
        English:'Japanese',
        MandarinChinese:'俄语',
        Hindi:'जापानी',
        Spanish:'japonés',
        French:'Japonais',
        German:'Japanisch',
        Russian:'Японский',
        Japanese:'日本語',
        Portuguese:'japonês',
        Bengali:'জাপানি',
        Indonesian:'Jepang',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Portuguese = {
        English:'Portuguese',
        MandarinChinese:'日语',
        Hindi:'पुर्तगाली',
        Spanish:'portugués',
        French: 'Portugais',
        German:'Portugiesisch',
        Russian:'Португальский',
        Japanese:'ポルトガル語',
        Portuguese:'português',
        Bengali:'পর্তুগিজ',
        Indonesian:'Portugis',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Bengali = {
        English:'Bengali',
        MandarinChinese:'葡萄牙语',
        Hindi:'बंगाली',
        Spanish: 'bengalí',
        French:'Bengali',
        German: 'Bengali',
        Russian:'Бенгальский',
        Japanese:'ベンガル語',
        Portuguese: 'bengali',
        Bengali: 'বাঙালি',
        Indonesian:'Bengali',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Indonesian = {
        English:'Indonesian',
        MandarinChinese:'孟加拉语',
        Hindi:'इंडोनेशियाई',
        Spanish: 'indonesio',
        French: 'Indonésien',
        German: 'Indonesisch',
        Russian:'Индонезийский',
        Japanese:'インドネシア語',
        Portuguese:'indonésio',
        Bengali:'ইন্দোনেশিয়ান',
        Indonesian:'Indonesia',
    }[stores.CurrentScreenLanguage.currentlanguage];

    TotalViews= {
        English:'Total views ',
        MandarinChinese:'印度尼西亚语',
        Hindi:'',
        Spanish:'',
        French:'Vues Total',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Retry = {
        English:'Retry',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Ressayer',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Participants = {
        English:'Participants',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Participants',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Profile = {
        English:'Profile',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Profil',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Age = {
        English:'Age',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Age',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    MyStories = {
        English:'My Stories',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'My Stories',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Messages = {
        English:'Messages',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Messages',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    CurrentReminds = {
        English:'Current Reminds',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Rappel Courant',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    VoteBoard = {
        English:'Vote Board',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Active = {
        English:'Active',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Received = {
        English:'Received',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    EditMyProfile = {
        English:'Edit My Profile',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    MaxAgeForDiscovery = {
        English:'Max Age For Discovery',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Male = {
        English:'Male',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Female = {
        English:'Female',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Any = {
        English:'Any',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    PreferedGenderForDiscovery = {
        English:'Prefered Gender For Discovery',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Name = {
        English:'Name',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    UserName = {
        English:'UserName',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Bio = {
        English:'Bio',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    EmailAddress = {
        English:'Email Address',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    PhoneNumber = {
        English:'Phone Number',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    NumberOfParticipations = {
        English:'Number Of Participations',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Dashboard = {
        English:'Dashboard',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    NewVote = {
        English:'New Vote',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Posted = {
        English:'Posted',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Photo = {
        English:'Photo',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Anyreasonforrefusal = {
        English:'Any reason for refusal',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Save = {
        English:'Save',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Deny = {
        English:'Deny',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    None = {
        English:'None',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    EditRemind = {
        English:'Edit  Remind',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    NewRemind = {
        English:'New  Remind',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Accept = {
        English:'Accept',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    RemindMessageToSetFor = {
        English:'Remind  Message  To  Set  For',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    ToAll = {
        English:'To All',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    ChooseParticipan = {
        English: 'Choose Participant',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Categories = {
        English:'Categories',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Repeat = {
        English:'Repeat',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];


    Daily = {
        English:'Daily',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Weekly = {
        English:'Weekly',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Monthly = {
        English:'Monthly',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Yearly = {
        English:'Yearly',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    DailyInfo = {
        English:'For Daily this Remind would occur everyday at',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    WeeklyInfo = {
        English:'For Weekly this Remind would occur every week on',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    MonthlyInfo = {
        English:'For Monthly this Remind would occur every month on the',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    YearlyInfo = {
        English:'For Yearly this Remind would occur every year on the',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    ChooseParticipants = {
        English:'Choose Participants',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Contacts = {
        English:'Contacts',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Contacts',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    NewContact = {
        English:'New Contacts',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Nouveau Contact',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];


    NewGroups = {
        English:'New Groups',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Nouveau Groups',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Search = {
        English:'Search',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Recherche',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    DarkTheme = {
        English:'Dark Theme',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Theme Sombre',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Theme = {
        English:'Theme',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Theme',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];

    Mode = {
        English:'Mode',
        MandarinChinese:'',
        Hindi:'',
        Spanish:'',
        French:'Mode',
        German:'',
        Russian:'',
        Japanese:'',
        Portuguese:'',
        Bengali:'',
        Indonesian:'',
    }[stores.CurrentScreenLanguage.currentlanguage];


}

const ScreenLanguage = new screenLanguage();
export default ScreenLanguage;






/*
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

*/
import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { alignStyles, customWidth, styles } from "../../assets/styles/MyStyles.tsx";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={[styles.container, alignStyles.center, customWidth.w100]}>
      <FlatList
        data={contactData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ContactItem {...item} />}
      />
    </SafeAreaView>
  );
};

type ContactProps = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  avatar: string;
};

const contactStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: 350,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  phone: {
    fontSize: 16
  }
});

const ContactItem = ({
                       id,
                       first_name,
                       last_name,
                       email,
                       gender,
                       phone,
                       avatar
                     }: ContactProps) => {
  return (
    <View style={contactStyle.container}>
      <Image style={contactStyle.avatar} source={{ uri: avatar }} />
      <View style={contactStyle.info}>
        <Text style={contactStyle.name}>
          {first_name} {last_name} {" - "}
          <Text style={contactStyle.phone}>{gender}</Text>
        </Text>
        <Text style={contactStyle.phone}>{phone}</Text>
        <Text style={contactStyle.phone}>{email}</Text>
      </View>
    </View>
  );
};

let contactData: ContactProps[];
contactData = [
  {
    id: 1,
    first_name: "Sibby",
    last_name: "Frankcombe",
    email: "sfrankcombe0@flavors.me",
    gender: "Female",
    phone: "120-490-9975",
    avatar: "https://robohash.org/eligendirerumdolores.png?size=50x50&set=set1"
  },
  {
    id: 2,
    first_name: "Gaby",
    last_name: "Smieton",
    email: "gsmieton1@wsj.com",
    gender: "Male",
    phone: "681-405-7141",
    avatar: "https://robohash.org/aspernaturnihilvero.png?size=50x50&set=set1"
  },
  {
    id: 3,
    first_name: "Felice",
    last_name: "Bremner",
    email: "fbremner2@cdbaby.com",
    gender: "Male",
    phone: "125-583-2878",
    avatar: "https://robohash.org/dictaprovidentqui.png?size=50x50&set=set1"
  },
  {
    id: 4,
    first_name: "Ade",
    last_name: "Setterington",
    email: "asetterington3@soundcloud.com",
    gender: "Male",
    phone: "707-689-8333",
    avatar: "https://robohash.org/aliquamautemiure.png?size=50x50&set=set1"
  },
  {
    id: 5,
    first_name: "Cornell",
    last_name: "Foxall",
    email: "cfoxall4@google.fr",
    gender: "Male",
    phone: "256-660-7799",
    avatar: "https://robohash.org/autofficiistempora.png?size=50x50&set=set1"
  },
  {
    id: 6,
    first_name: "Franciskus",
    last_name: "Sher",
    email: "fsher5@dailymotion.com",
    gender: "Male",
    phone: "235-409-0735",
    avatar: "https://robohash.org/quamdoloresnon.png?size=50x50&set=set1"
  },
  {
    id: 7,
    first_name: "Terrence",
    last_name: "Lundbeck",
    email: "tlundbeck6@washington.edu",
    gender: "Male",
    phone: "365-313-8140",
    avatar:
      "https://robohash.org/quiasimiliquemolestiae.png?size=50x50&set=set1"
  },
  {
    id: 8,
    first_name: "Gamaliel",
    last_name: "Burth",
    email: "gburth7@npr.org",
    gender: "Male",
    phone: "607-117-3071",
    avatar: "https://robohash.org/quamvoluptatessunt.png?size=50x50&set=set1"
  },
  {
    id: 9,
    first_name: "Nadiya",
    last_name: "MacAleese",
    email: "nmacaleese8@amazon.de",
    gender: "Female",
    phone: "519-894-6428",
    avatar: "https://robohash.org/recusandaeenimsoluta.png?size=50x50&set=set1"
  },
  {
    id: 10,
    first_name: "Aleta",
    last_name: "Veivers",
    email: "aveivers9@umich.edu",
    gender: "Female",
    phone: "177-371-4267",
    avatar: "https://robohash.org/culpaplaceatsaepe.png?size=50x50&set=set1"
  },
  {
    id: 11,
    first_name: "Charla",
    last_name: "Hollyard",
    email: "chollyarda@google.com.au",
    gender: "Female",
    phone: "175-450-3100",
    avatar:
      "https://robohash.org/estvoluptatumarchitecto.png?size=50x50&set=set1"
  },
  {
    id: 12,
    first_name: "Wenona",
    last_name: "Santoro",
    email: "wsantorob@mtv.com",
    gender: "Female",
    phone: "613-497-3403",
    avatar: "https://robohash.org/totamnumquamet.png?size=50x50&set=set1"
  },
  {
    id: 13,
    first_name: "Easter",
    last_name: "Kepe",
    email: "ekepec@bigcartel.com",
    gender: "Female",
    phone: "104-864-3472",
    avatar: "https://robohash.org/dolorempraesentiumad.png?size=50x50&set=set1"
  },
  {
    id: 14,
    first_name: "Amalee",
    last_name: "Crasford",
    email: "acrasfordd@tripod.com",
    gender: "Female",
    phone: "989-312-2300",
    avatar: "https://robohash.org/rerumestveritatis.png?size=50x50&set=set1"
  },
  {
    id: 15,
    first_name: "Zed",
    last_name: "Drinkale",
    email: "zdrinkalee@cyberchimps.com",
    gender: "Male",
    phone: "712-397-8904",
    avatar: "https://robohash.org/facereducimusmagni.png?size=50x50&set=set1"
  },
  {
    id: 16,
    first_name: "Maybelle",
    last_name: "Owens",
    email: "mowensf@free.fr",
    gender: "Female",
    phone: "502-618-8111",
    avatar: "https://robohash.org/ideosqui.png?size=50x50&set=set1"
  },
  {
    id: 17,
    first_name: "Janenna",
    last_name: "Graysmark",
    email: "jgraysmarkg@sciencedaily.com",
    gender: "Female",
    phone: "311-691-5847",
    avatar: "https://robohash.org/doloressintsed.png?size=50x50&set=set1"
  },
  {
    id: 18,
    first_name: "Berke",
    last_name: "Lyenyng",
    email: "blyenyngh@squidoo.com",
    gender: "Male",
    phone: "722-474-0650",
    avatar: "https://robohash.org/suscipitillonatus.png?size=50x50&set=set1"
  },
  {
    id: 19,
    first_name: "Cecelia",
    last_name: "Meatcher",
    email: "cmeatcheri@forbes.com",
    gender: "Genderqueer",
    phone: "713-376-6468",
    avatar: "https://robohash.org/harumlaborumvoluptas.png?size=50x50&set=set1"
  },
  {
    id: 20,
    first_name: "Bradford",
    last_name: "Gadsden",
    email: "bgadsdenj@pagesperso-orange.fr",
    gender: "Male",
    phone: "896-614-4898",
    avatar: "https://robohash.org/quianostrumeum.png?size=50x50&set=set1"
  },
  {
    id: 21,
    first_name: "Holmes",
    last_name: "Sandeland",
    email: "hsandelandk@squarespace.com",
    gender: "Male",
    phone: "401-446-1361",
    avatar: "https://robohash.org/possimusteneturanimi.png?size=50x50&set=set1"
  },
  {
    id: 22,
    first_name: "Gabby",
    last_name: "Bodd",
    email: "gboddl@posterous.com",
    gender: "Male",
    phone: "664-494-2137",
    avatar: "https://robohash.org/officiisquonisi.png?size=50x50&set=set1"
  },
  {
    id: 23,
    first_name: "Elliot",
    last_name: "Muffin",
    email: "emuffinm@biblegateway.com",
    gender: "Male",
    phone: "465-281-7227",
    avatar: "https://robohash.org/animiinaut.png?size=50x50&set=set1"
  },
  {
    id: 24,
    first_name: "Cherice",
    last_name: "Maskill",
    email: "cmaskilln@tinypic.com",
    gender: "Female",
    phone: "863-141-4066",
    avatar: "https://robohash.org/etrepellatfugit.png?size=50x50&set=set1"
  },
  {
    id: 25,
    first_name: "Reidar",
    last_name: "Scotfurth",
    email: "rscotfurtho@mayoclinic.com",
    gender: "Male",
    phone: "773-903-1235",
    avatar: "https://robohash.org/sequireiciendisut.png?size=50x50&set=set1"
  },
  {
    id: 26,
    first_name: "Nicolas",
    last_name: "Halfacree",
    email: "nhalfacreep@opera.com",
    gender: "Male",
    phone: "635-775-5081",
    avatar: "https://robohash.org/laudantiumetenim.png?size=50x50&set=set1"
  },
  {
    id: 27,
    first_name: "Weston",
    last_name: "Warder",
    email: "wwarderq@digg.com",
    gender: "Male",
    phone: "986-464-1882",
    avatar: "https://robohash.org/magnamquifugit.png?size=50x50&set=set1"
  },
  {
    id: 28,
    first_name: "Forest",
    last_name: "McClinton",
    email: "fmcclintonr@studiopress.com",
    gender: "Male",
    phone: "687-663-7246",
    avatar: "https://robohash.org/harumminusautem.png?size=50x50&set=set1"
  },
  {
    id: 29,
    first_name: "Francis",
    last_name: "Thorndale",
    email: "fthorndales@craigslist.org",
    gender: "Non-binary",
    phone: "507-449-6841",
    avatar: "https://robohash.org/velipsaillo.png?size=50x50&set=set1"
  },
  {
    id: 30,
    first_name: "Egor",
    last_name: "Donovan",
    email: "edonovant@plala.or.jp",
    gender: "Male",
    phone: "840-665-4395",
    avatar: "https://robohash.org/doloreseiusincidunt.png?size=50x50&set=set1"
  },
  {
    id: 31,
    first_name: "Cornelius",
    last_name: "Mewhirter",
    email: "cmewhirteru@nyu.edu",
    gender: "Male",
    phone: "963-398-6067",
    avatar: "https://robohash.org/seddolorumet.png?size=50x50&set=set1"
  },
  {
    id: 32,
    first_name: "Bern",
    last_name: "Dahmel",
    email: "bdahmelv@eventbrite.com",
    gender: "Male",
    phone: "243-716-8441",
    avatar: "https://robohash.org/etvelitlaudantium.png?size=50x50&set=set1"
  },
  {
    id: 33,
    first_name: "Reinaldos",
    last_name: "Lidster",
    email: "rlidsterw@blogtalkradio.com",
    gender: "Male",
    phone: "901-147-3727",
    avatar: "https://robohash.org/veniamquissit.png?size=50x50&set=set1"
  },
  {
    id: 34,
    first_name: "Tiertza",
    last_name: "Fancutt",
    email: "tfancuttx@ucoz.com",
    gender: "Female",
    phone: "711-519-4316",
    avatar:
      "https://robohash.org/nemonecessitatibusdelectus.png?size=50x50&set=set1"
  },
  {
    id: 35,
    first_name: "Alexis",
    last_name: "Litt",
    email: "alitty@php.net",
    gender: "Female",
    phone: "809-670-1381",
    avatar: "https://robohash.org/aspernaturnisisequi.png?size=50x50&set=set1"
  },
  {
    id: 36,
    first_name: "Lisha",
    last_name: "Ricker",
    email: "lrickerz@g.co",
    gender: "Female",
    phone: "162-910-6049",
    avatar: "https://robohash.org/rationenequecommodi.png?size=50x50&set=set1"
  },
  {
    id: 37,
    first_name: "Eunice",
    last_name: "Bedenham",
    email: "ebedenham10@sina.com.cn",
    gender: "Non-binary",
    phone: "400-782-2572",
    avatar:
      "https://robohash.org/officiisundereprehenderit.png?size=50x50&set=set1"
  },
  {
    id: 38,
    first_name: "Curr",
    last_name: "Grindall",
    email: "cgrindall11@about.me",
    gender: "Male",
    phone: "438-291-6646",
    avatar: "https://robohash.org/saepedictafacilis.png?size=50x50&set=set1"
  },
  {
    id: 39,
    first_name: "Genna",
    last_name: "Goshawk",
    email: "ggoshawk12@amazonaws.com",
    gender: "Female",
    phone: "972-550-4771",
    avatar: "https://robohash.org/similiquesuscipitnon.png?size=50x50&set=set1"
  },
  {
    id: 40,
    first_name: "Waite",
    last_name: "Heare",
    email: "wheare13@baidu.com",
    gender: "Male",
    phone: "876-405-0482",
    avatar: "https://robohash.org/quiaccusamusnumquam.png?size=50x50&set=set1"
  },
  {
    id: 41,
    first_name: "Dwain",
    last_name: "Le Surf",
    email: "dlesurf14@artisteer.com",
    gender: "Male",
    phone: "580-941-0764",
    avatar: "https://robohash.org/utdebitisconsectetur.png?size=50x50&set=set1"
  },
  {
    id: 42,
    first_name: "Leonardo",
    last_name: "Riggeard",
    email: "lriggeard15@woothemes.com",
    gender: "Male",
    phone: "388-292-9504",
    avatar: "https://robohash.org/aliasquianobis.png?size=50x50&set=set1"
  },
  {
    id: 43,
    first_name: "Scotty",
    last_name: "Dinneen",
    email: "sdinneen16@craigslist.org",
    gender: "Male",
    phone: "425-634-8627",
    avatar: "https://robohash.org/isteinducimus.png?size=50x50&set=set1"
  },
  {
    id: 44,
    first_name: "Alexine",
    last_name: "Duley",
    email: "aduley17@businessweek.com",
    gender: "Female",
    phone: "576-820-3763",
    avatar: "https://robohash.org/recusandaequiafacere.png?size=50x50&set=set1"
  },
  {
    id: 45,
    first_name: "Marabel",
    last_name: "Leser",
    email: "mleser18@nasa.gov",
    gender: "Female",
    phone: "107-107-5610",
    avatar: "https://robohash.org/nostrummolestiaesed.png?size=50x50&set=set1"
  },
  {
    id: 46,
    first_name: "Grace",
    last_name: "Rattenbury",
    email: "grattenbury19@senate.gov",
    gender: "Female",
    phone: "935-516-6465",
    avatar:
      "https://robohash.org/quasiperferendisullam.png?size=50x50&set=set1"
  },
  {
    id: 47,
    first_name: "Phaidra",
    last_name: "Dealtry",
    email: "pdealtry1a@latimes.com",
    gender: "Female",
    phone: "966-649-0030",
    avatar: "https://robohash.org/autrerumnumquam.png?size=50x50&set=set1"
  },
  {
    id: 48,
    first_name: "Sabina",
    last_name: "Glew",
    email: "sglew1b@dmoz.org",
    gender: "Female",
    phone: "341-605-5612",
    avatar: "https://robohash.org/quisquisblanditiis.png?size=50x50&set=set1"
  },
  {
    id: 49,
    first_name: "Dix",
    last_name: "Jowitt",
    email: "djowitt1c@japanpost.jp",
    gender: "Bigender",
    phone: "423-256-0572",
    avatar: "https://robohash.org/eatemporibusest.png?size=50x50&set=set1"
  },
  {
    id: 50,
    first_name: "Vaclav",
    last_name: "Ioannidis",
    email: "vioannidis1d@twitter.com",
    gender: "Male",
    phone: "333-306-4719",
    avatar:
      "https://robohash.org/reprehenderitetinventore.png?size=50x50&set=set1"
  }
];

export default HomeScreen;

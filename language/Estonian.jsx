import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Tulevane mitmikmängu modifikatsioon mängule <em>Grand Theft Auto: San Andreas</em>, mis on täielikult ühilduv senieksisteeriva modifikatsiooniga <em>San Andreas Multiplayer</em>.
    </p>
    <br />
    <p>
      See tähendab, et <strong>olemasolev SA:MP klient ja kõik SA:MP skriptid töötavad open.mp'ga</strong>, ainsaks erinevuseks on, et serveripoolselt on parandatud paljud vead, mida seni tuli parandada skriptist.
    </p>
    <p>
      Kui soovid teada millal modifikatsiooni alla laadida saab või kuidas meid aidata saab, siis soovitame lugeda <a href="https://www.burgershot.gg/showthread.php?tid=99">seda foorumiteemat</a>.
    </p>
    <h1>
      <a href={faq}>KKK</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>KKK</h1>
    <hr />
    <h2>Mis on open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) on mitmikmängu modifikatsioon mängule <em>Grand Theft Auto: San Andreas</em>, mis on mõeldud asendamaks modifikatsiooni <em>San Andreas Multiplayer</em> vastusena suurele hulgale probleemidele seoses SA:MPi uuenduste ning juhtimisega. Esialgne versioon modifikatsioonist on asendus SA-MP serveritarkvarale ning sellega saab ühenduda kasutades eksisteerivat SA-MP klienti. Kaugemas tulevikus lisandub sellele ka open.mp klient, mis avab ukse paljudele uutele ja huvitavatele uuendustele.</p>
    <hr />
    <h2>Kas see põhineb SA-MPil?</h2>
    <p>Ei. See on täiesti uus modifikatsioon, mis põhineb aastakümnete pikkustel teadmistel ja kogemustel. Varasemalt on olnud SA-MPi põhjal uute modifikatsioonide loomise katsetusi, kuid meie arvates ebaõnnestusid need kahel põhjusel:</p>
    <ol>
      <li>Need põhinesid internetti lekkinud SA-MPi lähtekoodil. Nende modifikatsioonide autoritel polnud seaduslikku ega moraalset õigust selle koodi kasutamiseks. Me keeldume radikaalselt selle koodi kasutamisest. See aeglustab küll meie arendusprotsessi, kuid on pikas perspektiivis õige samm.</li>
      <li>Need muutsid samaaegselt liiga palju, asendades skriptimiskeele, eemaldades olemasolevaid süsteeme või muutes neid, lõhkudes olemasolevaid skripte. See raskendas olemasolevatel suuremahuliste mängumoodide ja suure mängijate arvuga serveritel üle kolimist, sest selleks oleks nad pidanud ümber kirjutama osa, kui mitte kõik oma olemasolevast koodist. Me kavatseme küll aja jooksul lisada uusi süsteeme ning täiustada olemasolevaid, aga seda ilma olemasolevaid skripte lõhkumata.</li>
    </ol>
    <hr />
    <h2>Mis on open.mp loomise põhjus?</h2>
    <p>Meie, endised testijate tiimi liikmed, üritasime korduvalt SA-MPi arendust soovituste ning abipakkumiste näol paremaks teha ning sama tegi ka SA-MP kogukond lootuses saada mingisuguseidki uuendusi, aga seda kõike tulutult. Usutavasti oli põhjuseks lihtsalt modifikatsiooni arendajapoolne huvipuudus, mis ei ole iseenesest probleem, kuid samaaegselt keeldus ta andmast võimalusi arendamiseks inimestele, kellel modifikatsiooni vastu siiani huvi on, ning tahtis kogu vastutuse endale jätta. Arvatakse, et selle põhjuseks on see, et SA-MP on tema passiivne sissetulek, kuid selle kohta puuduvad tõendid. Hoolimata suurest huvist ning tugevast ja ühtsest kogukonnast uskus ta, et modifikatsioonil on järel vaid 1-2 eluaastat ning kogukond, kes nägi aastaid vaeva SA-MPi muutmiseks selleks, mis ta praegu on, ei vääri edaspidiseid uuendusi.</p>
    <br />
    <p>Meie arvame teisiti.</p>
    <hr />
    <h2>Mis on teie seisukoht Kalcori ja SA-MPi osas?</h2>
    <p>Me armastame SA-MPi, ilma selleta poleks me siin, ning selles osas me võlgneme tänu Kalcorile. Ta on aastate jooksul teinud modifikatsiooni heaks väga palju ning seda ei tohiks iialgi unustada. Sündmused, mis viisid open.mp loomiseni, leidsid aset, sest meil olid eriarvamused paljude hiljutiste otsuste osas ning hoolimata korduvatest üritustest modifikatsiooni õigele suunale aitamiseks ei tundunud tulevik helge. Seetõttu olime me sunnitud tegema otsuse SA-MPi pärandi jätkamiseks ilma Kalcorita. See ei ole isiklik rünnak tema vastu ning me ei tolereeri isiklikku solvamist mitte kellegi suhtes hoolimata sellest, millised on nende vaated antud olukorra suhtes, me peame suutma jääda vesteldes inimlikuks ning mitte toetuma isiklikele solvangutele.</p>
    <hr />
    <h2>Kas see mitte ei lõhesta kogukonda?</h2>
    <p>See ei ole meie eesmärk. Ideaalselt poleks SA-MPist eraldumine üldse vajalik, kuid eraldumine ning olemasoleva päästmine on parem kui selle hääbumise kõrvalt vaatamine. Tegelikult on selle modifikatsiooni väljakuulutamise hetkest alates kogukonnaga taasliitunud paljud inglise keelt emakeelena mittekõnelevad inimesed, keda varasemalt eemale tõrjuti ning ignoreeriti, mistõttu võib öelda, et open.mp toob hoopis kogukonna taas kokku. SA-MP foorumist on bännitud palju inimesi (ja teatud juhtudel on isegi kõik nende postitused kustutatud), kuid Kalcor ise on öelnud, et ametlik foorum ei ole SA-MP vaid kõigest osa sellest. Paljud mängijad, serveriomanikud ja arendajad ei ole sinna kordagi postitanud või isegi sellega liitunud, seega nende inimestega suhtluse taasalustamine ühendab juba eksisteerivat kogukonda veelgi enam.</p>
    <hr />
    <h2>Kas modifikatsiooni nimi viitab avatud lähtekoodile?</h2>
    <p>Jah, see on pikas plaanis meie kavatsus. Praegusel hetkel viitab nimi avatusele ja läbipaistuvsele modifikatsiooni arenduses ning suhtluses kogukonnaga, mis on edasiminek võrreldes senisega, kuid kui modifikatsiooni arendus on jõudnud piisavasse järku, muudame selle lähtekoodi avatuks.</p>
    <hr />
    <h2>Millal modifikatsiooni alla laadida saab?</h2>
    <p>Kahjuks pole sellele head vastust, parim, mis öelda oskame, on: siis, kui see on valmis. Pole võimalik ennustada, kaua niisuguse projektiga aega minna võib. See on salajases arenduses on olnud juba pikka aega ning selle aja jooksul näinud mitmeid kõikumisi arendustegevuse aktiivsuses, olenevalt sellest, kui hõivatud inimesed parajasti on. Kuid võite kindlad olla, et seda on oodata juba varsti ning arendus kulgeb tempokalt tänu hästi läbimõeldud süsteemidisainile, millest kuulete juba lähiajal.</p>
    <hr />
    <h2>Kuidas saab abiks olla?</h2>
    <p>Hoia foorumil silma peal. Meil on selle kohta foorumis teema ning me täiendame seda, kui lisandub midagi, millega abi vaja läheb. Kuigi projekt muutus avalikuks pisut varem kui lootsime, oleme esimesele väljalaskele lähedal, kuid see ei tähenda seda, et abi pole vägagi oodatud ning hinnatud. Täname sind, et tunned projekti vastu huvi ning usud sellesse:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Vastav teema <i>burgershot.gg</i> foorumis.</u>
    </a>
    <hr />
    <h2>Mis on <i>burgershot.gg</i>?</h2>
    <p>burgershot.gg on mängukommuun, ei midagi enamat. Paljud inimesed on seotud nii selle kui open.mp'ga ning open.mp arenduse kohta saab praegu lugeda sealt, kuid tegemist on kahe eraldiseisva projektiga. Tegemist ei ole open.mp foorumiga ning üks projekt ei kuulu teisele. Kui open.mp veebisait on täielikult valmis, eraldatakse kaks saiti üksteisest. Võrdluseks võib välja tuua näiteks selle, kuidas SA-MP oli kunagi osa <i>GTAForums</i> kommuunist, kuni selle õige veebileht valmis sai.</p>
    <hr />
    <h2>Aga mis on <i>OpenMP</i>?</h2>
    <p>"OpenMP" on mitmiktöötlusprojekt, meie oleme "open.mp". Need on täiesti erinevad asjad.</p>
  </div>
);

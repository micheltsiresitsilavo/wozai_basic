"use client";

const About = () => {
  return (
    <div className="px-8 sm:px-0 sm:max-w-lg mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-sm font-medium mb-3 text-slate-300">AiSapien</h1>
        <p className="text-sm text-justify text-slate-100">
          Izy dia web interface chatbot. Fantatsika moa fa ny atao hoe chatbot
          dia program mampiasa artificial intelligence (AI) afaka miresaka
          amin'ny olombelona ary toy ny olombelona mihintsy rehefa manao ny
          asany.
        </p>
      </div>
      <div>
        <h1 className="text-sm font-medium mb-3 text-slate-300">
          Fa maninona no natao "AiSapien"?
        </h1>
        <p className="text-sm text-justify text-slate-200">
          Anarana tongatonga hoazy tato antsaiko fotsiny kkkk. Rehefa nandinika
          aho amin'izay anaran'izay dia ny "Homo sapien" no tato antsaiko
          voalohany. Ilay nianarantsika tany am'ny Terminale, (tadidinao ve?),
          rehefa io anarana io voantonona dia misy antsoina hoe "Fivoarana" ao.
          Ka zay no nangalako tahaka an'ilay anarana, miazakakazaka hatrany ny
          resaka IA tatohoato zay. Ny tadidiko farany zao dia ilay lahateny
          nataon'i CEO ny NVIDIA (tsy tadidiko anarany) fa mety horava ny
          fianarana langage de programmation nohon'ny fivoarana'ny IA, eo koa le
          Devin (tsy manjary iny kkkk) izay saika mahavita ny asa rehetra eo
          amin'ny Devéloppement informatique.
        </p>
      </div>

      <div>
        <h1 className="text-sm font-medium mb-3 text-slate-300">
          Fampiasana azy
        </h1>
        <p className="text-sm text-justify text-gray-100">
          Afaka miresaka avy hatrany ianao. Manoratra eo amin'ilay fanoratana,
          dia mamaly anao izy. Aza misalasala miresaka (manoratra raha ny tena
          marina kokoa kkkk).
        </p>
      </div>
      <div>
        <h1 className="text-sm font-medium mb-3 text-slate-300">
          Nanamboarana azy
        </h1>
        <p className="text-sm text-justify text-slate-100">
          React.js no specialitéko, zaho tsy mahavoa Python loatra (aleo
          tsorina) fa nefa miezaka ihany. Nanome tosika ahy ilay framework ny
          React atao hoe Next.js, nanome karazana interface hoahy nahafahako
          mampiasa OpenAI. gpt-3.5-turbo no model ampisaiko aminy ary ny resaka
          http Stream no manodidina ny famohana ny response avoakany avy any.
          Tsy maintsy http stream io no miasa satria ila messages avy any dia en
          streaming.
        </p>
      </div>
      <div>
        <h1 className="text-sm font-medium mb-3 text-slate-300">Ny tsy ampy</h1>
        <p className="text-sm text-justify text-slate-100">
          AiSapien mbola version basic izy eto, ny tiako ambara zany dia
          tsotsotra. Tsy misy cache izy hanajariana ireo discussion nifanaovana,
          tsy misy fampidirana olona mba hiavahany tsirairay (resaka Auth) tsisy
          identity ny olona fa dia mijanona ho User fotsiny ny rehetra. Tsy
          afaka manao analyse image sy document.
        </p>
      </div>
    </div>
  );
};

export default About;

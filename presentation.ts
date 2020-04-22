
import readline from 'readline';
import{Service} from './service';
import{Client} from './domain';
import{Error} from './domain';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start(){
    console.log('** Administration Hotel **\n');
    console.log('1. Lister les clients');
    console.log('2. Ajouter un client');
    console.log('3. Rechercher un client par nom');
    console.log('4. Vérifier la disponibilité d\'une chambre');
    console.log('99. Quitter\n')
    console.log('Choisir une action : ')
}

export class presentation{
    static choisir(){
        start();
        let choix;
    
        rl.question('', (line) => {
            choix = line;
            if (choix == '1'){
                Service.listerClients();
            }
            else if (choix =='2'){
                ajouterClient(rl);
            }
            else if (choix == '3'){
                rechercherClient();
            }
            else if (choix == '4'){
                verifierDispoChambre();
            }
            else if (choix == '99'){
                rl.close();
                quitter();
            }
            else {
                presentation.choisir();
            }
        });
    }

    static afficherClients(body:Client[]):void{
        console.log('>> Liste des clients');
        for (let i=0; i<body.length; i++){
            console.log(body[i].nom+" "+body[i].prenoms)
        }
        presentation.choisir();
    }

    static afficherErreur(err:Error){
        console.log(err.message);
        presentation.choisir();
    }

    static clientAjoute( body:any|null){
        console.log('Client créé uuid =', body.uuid);
        presentation.choisir();
    }

    static afficher(msg:string){
        console.log(msg);
        presentation.choisir();
    }
}

function quitter(){
    console.log('Aurevoir');
    process.exit();
}

function ajouterClient(rl:any){
    rl.question('Entrez un nom : ', (saisie:string) => {
        const nom = saisie;
        rl.question('Entrez un prenom : ', (saisie:string) => {
            const prenom = saisie;
            Service.ajouterClient(nom, prenom);
        });
    });
}

function rechercherClient(){
    rl.question('Entrez un nom : ', (saisie:string) => {
        const nom = saisie;
        Service.rechercherClient(nom);
    });
}

function verifierDispoChambre(){
    rl.question('Entrez le numero : ', (saisie:string) => {
        const numero = saisie;
        Service.verifierDispoChambre(numero);
    });
}




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

exports.start = start;

function quitter(){
    console.log('Aurevoir');
    process.exit();
}

export function afficherErreur(err:Error){
    console.log(err.message);
    choisir();
}

export function afficher(msg:string){
    console.log(msg);
    choisir();
}

export function afficherClients(body:Client[]):void{
    console.log('>> Liste des clients');
    for (let i=0; i<body.length; i++){
        console.log(body[i].nom+" "+body[i].prenoms)
    }
    choisir();
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

export function clientAjoute(err:string|null, body:any|null){
    if (err){
        console.log(err);
    }else {
        console.log('Client créé uuid =', body.uuid);
        choisir();
    }
}

function rechercherClient(){
    rl.question('Entrez un nom : ', (saisie:string) => {
        const nom = saisie;
        Service.rechercherClient(nom);
    });
}

export function afficherClient(client:Client){
    console.log('Client trouve :');
    console.log(client);
    choisir();
}

function verifierDispoChambre(){
    rl.question('Entrez le numero : ', (saisie:string) => {
        const numero = saisie;
        Service.verifierDispoChambre(numero);
    });
}

export function choisir(){
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
            choisir();
        }
    });
}
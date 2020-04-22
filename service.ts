import requestPromise from 'request-promise-native';
import{presentation} from './presentation';

const url = 'http://localhost:8080/';

export class Service{
    static listerClients(){
        requestPromise(url+'clients', 
        { json: true })
        .then((body) => presentation.afficherClients(body))
        .catch((err) => presentation.afficherErreur(err))
    }

    static ajouterClient(nom:string, prenom:string){
        requestPromise(url+'clients', { json: true,
            method: 'POST',
            body: {
                nom : nom,
                prenoms : prenom
            }})
            .then((body) => presentation.clientAjoute(body))
            .catch((err) => presentation.afficherErreur(err));
    }

    static rechercherClient(nom:string){
        requestPromise(url+'clients/client?nom='+nom, 
            { json: true })
            .then((body) => presentation.afficherClients(body))
            .catch((err) => presentation.afficherErreur(err))
    }

    static verifierDispoChambre(numero:string){
        requestPromise(url+'chambres/chambreDispo?numero='+numero, 
            { json: true })
            .then((body) => presentation.afficher(body))
            .catch((err) => presentation.afficherErreur(err))
    }
}
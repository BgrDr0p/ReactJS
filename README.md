# ReactJs_Test
Projet base de ReactJS


DOM = Document Object Model

React crée un DOM virtuel, puis a chaque modif regénére un DOM virtuel, puis modifie le DOM sur le navigateur ==> Utilisation de l'api React

JSX : écrire du code HTML direct sur JS non nativement supporté par navigateurs. ==> utilisation de Babel ( JS Library ) ==> "translate" en JS classique.

class de HTML devients className en JS

Donc React JS = création de composants

Données dynamique : - Dans une classe utilisation de this.props.message ( exemple)
                    - Dans composant fonctionnel utilisation de arguments 
 

State : possibilté de changer les états avec setState.

Node.js nécessaire pour config les environnements de dev (WebPack, babel etc...) et test.


Utilisation de Create React App pour config un environnement de dév complet.

pour l'installer dans le dossier : create-react-app NomDuProjet


Dossier node_modules : toutes les dépendances

Dossier public : page index.html qui contient notre <div id="root">

Dossier src : index.js qui pointe vers les composants qui pointe vers la div root

Dossier components : composants fracturées de l'app avec "export default" à la fin pour pouvoir relier les fichiers

Fichier package.json : fichiers de toutes les dépendances



<BrowserRouter> <Switch> <Route path="/"> </Route> </Switch> </BrowerRouter> : possibilté de créér des routes pour naviguer dans l'app (ici fichier APP)

Dans les composants : utilisation de <NavLink to=""> </Navlink>



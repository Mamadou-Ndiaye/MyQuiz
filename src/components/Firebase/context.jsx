import React from 'react';

// Creer un context firebase pour l utiliser dans les autres tous les component 
//On instansie dans index.js de la racine du projet afin qu il soit disponoble dans App et tout les enfants de App
const FirebaseContext = React.createContext(null);

export default FirebaseContext;
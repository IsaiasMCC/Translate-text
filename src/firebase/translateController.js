const {translate, db, }  = require('../database/credentials');
const { collection, doc, setDoc, getDocs, deleteDoc, addDoc, onSnapshot, query, updateDoc } = require('firebase/firestore');



const translateText = async (text, target)=> {
    if(!text){
        return null;
    }
    if (!target){
        return null;
    }
    const translations = await translate.translate(text, target);
    return translations;
}

const user_lang = async (ref, id_reunion, text) => {
    const q = query(collection(db,"reuniones", id_reunion, "user_lang"));
    getDocs(q).then((snapshots)=>{
        let language = [];
        snapshots.forEach((doc)=>{
            language.push(doc.data());
        }
            
        );
        tradu(text, language).then( (conversacion)=> {
            
    
            updateDoc(ref, {traducciones: [...conversacion], traducido: true});
               
        })  
    });

}

const conversacion = async (id_reunion) => {
    // console.log(language);
    const q = query(collection(db, "reuniones", id_reunion, "conversacion"));
    onSnapshot(q, (querySnapshot) => {
        
        querySnapshot.docChanges().forEach( async change => {
          if (change.type === 'added' && !change.doc.data().traducido) {
       
            const text = change.doc.data().transcripcion;
                    console.log("dfdfdfdf");     
               user_lang(change.doc.ref, id_reunion, text);
               
                  
          }
          if (change.type === 'modified') {
            // console.log('Modified city: ', change.doc.data());
          }
          if (change.type === 'removed') {
            // console.log('Removed city: ', change.doc.data());

          }
        });
      });
    
}

const tradu = async (text, language)  => {
    let conversacion = [];
   console.log(text);
    for (let i= 0; i<language.length; i++) {
        // console.log(language[i])
        
        const texto = await translateText(text, language[i].lang);
            // console.log(texto)
             conversacion.push({texto: texto[0], user_id: language[i].user_id });
    }
    return conversacion;
}


const reuniones =  () => {
    

        const q = query(collection(db, "reuniones"));
    const unsubscribe = onSnapshot(collection(db, "reuniones"), (querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
            conversacion(doc.id);
        });
        
    });

   
}


module.exports = {
    translateText,
    user_lang,
    conversacion,
    reuniones
}


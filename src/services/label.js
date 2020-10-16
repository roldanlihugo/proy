import fire from '../FirestoreConfig'
 
const fireDB =  fire.firestore();
 
const getLabels = async () => {
    let Labels = [];
    await fireDB.collection("label").get()
    .then((snapShots) => {
        snapShots.docs.map( (label) => {
            Labels.push({...label.data(), id: label.id});
        } )
    })
 
    return Labels;
}


const getLabelbyId = async (labelId) => { 
    let Labels = [];
    await fireDB.collection("label").doc(labelId).get()
    .then((snapShots) => {  
        [snapShots].map((label) => {
            Labels.push({...label.data(), id: label.id}); 
        })        
    }) 
    
    return Labels;
}

const createLabel = async (label) => {
    return await fireDB.collection("label").add(label);
}

const deleteLabelById = async (labelId) => {
    return await fireDB.collection("label").category(labelId).delete();
}

export { getLabels, createLabel , getLabelbyId, deleteLabelById};
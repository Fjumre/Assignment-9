import './styles/App.css'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchData } from './util/persistence'
import _ from 'lodash';



const blankPerson={id: '', age: '', name: '', email: '', gender: ''}


function App() {
 
  const [persons, setPersons]= useState([])

  const [personToEdit, setPersonToEdit]= useState(blankPerson)


  const APIURL= "http://localhost:3000/api"

  function editPerson(person){
    setPersonToEdit(person)
  }

  function getPersons(callback){
    //Fetch/GET Data
    fetchData(APIURL, callback)

  }

  function mutatePerson(person){
    if(person.id!=''){

      updatePerson(person)
    }
    else{
        createPerson(person)
    }

  }

function updatePerson(person){
  
  fetchData (`${APIURL}/${person.id}`, 
  setPersons(persons.map(p=> p.id == person.id ? {...person} : p)), 
  `PUT`, 
  person)
}


function createPerson(person){
  fetchData(APIURL,  
    (newPerson) => setPersons([...persons, newPerson]), 
    'POST', person);
}




  function deletePersonById(personId){

    //Fjern via API-json server
    fetchData (`${APIURL}/${personId}`,  () => {}, `DELETE`)

    //Fjern fra persons array via setPersons()
    setPersons([...persons.filter((p)=> p.id != personId)]) 

  }


  useEffect(() => {
    //Get/Fetch all persons
    getPersons((data)=> setPersons(data))
  }, [])
  

  return (
    <div>
    <h1>React CRUD</h1>
    
    <PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson}/>
    <PersonList persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>
    
  
    </div>
  )
}

export default App

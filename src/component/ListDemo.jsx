import {useState} from "react";

function MemberTable({ members }) {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Age</th>
        </thead>
      <tbody>
        {members.map(member=>(
            <tr  key={crypto.randomUUID()}>
            <td>{member.name}</td>
            <td>{member.age}</td>
            </tr >
       ))}
      </tbody>
    </table>
  );
}

function MemberDemo({members}) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={members} />
    </div>
  );
}

export default function ListDemo() {

  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];

  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}


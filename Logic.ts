// First name : Suresh 
// LastName : Addagalla 
// Output : saudrdeasgsahlla

const firstName : string = "Suresh";
const lastName : string = "Addagalla";
let output : string ="";

const maxLength= Math.max(firstName.length, lastName.length);

for(let i=0; i<maxLength;i++)
{
    // console.log(firstName[i])
    // console.log(lastName[i])

    if(i<firstName.length)
    {
        output+=firstName[i];
    }
    if(i<lastName.length)
    {
        output+=lastName[i]
    }
}

console.log(output)
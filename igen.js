let user = {
    name:
    {
        first: 'John',
        last: 'Smith'  
    }
}
console.log(`${user.name.first} ${user.name.last}`);
console.log(`${user.name.first='Paul'} ${user.name.last}`);
delete user.name.first;
console.log(`${user.name.first} ${user.name.last}`);
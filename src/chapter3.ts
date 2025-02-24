type User = {
    userName: string,
    age: number,
    premiumUser: boolean
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`

const users: User[] = [];

const lines = data.split("\n")
for (const line of lines){
    if(line === ""){
        continue;
    }
    const [userName, ageString, premiumUserString] = line.split(",")
    const age = Number(ageString)
    const premiumUser = premiumUserString === "1";

    users.push({
        userName,
        age,
        premiumUser
    })
}

for (const user of users){
    if(user.premiumUser){
        console.log(`${user.userName}(${user.age})はプレミアムユーザーです。`)
    }else{
        console.log(`${user.userName}(${user.age})はプレミアムユーザーではありません。`)
    }
}
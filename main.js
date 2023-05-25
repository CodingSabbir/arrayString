function longsestString(names){
    let longstword='';
    for(name of names){
        if(name.length > longstword.length){
            longstword=name;  
        }
    }
    return[longstword,name.indexOf(longstword)]
}
console.log(longsestString(['sabbir','i love bangladesh','rakib','sohan']));
const isMatch = (s, p) => {
  for(let i = 0; i < p.length; i += 2){
    console.log(p.slice(i, i+2));
    if(p.slice(i, i+2) == ".*") return true;
    else if(p[1] == "*"){
      const regex = new RegExp(`${p[0]}`, "gi");
      const matches = s.match(regex);
      console.log(matches);
      if(matches.length == s.length) return true;
    }
    else return s == p ? true : false;
  }
}

console.log(isMatch("aab", "c*a*b"))
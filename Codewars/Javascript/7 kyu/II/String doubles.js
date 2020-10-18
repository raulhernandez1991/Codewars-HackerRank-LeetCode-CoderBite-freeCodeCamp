function doubles(s) {
  let founded= false
  s=s.split('')
  for(let i=0; i<s.length; i++){
    if(s[i] == s[i+1]){
      s[i]=""
      s[i+1] =""
      founded= true
    }
  }
  return founded ? doubles(s.join('')) : s.join('')
}

const doublesUp = (s) => {
  const resp = []
  for(let c of s){
    if(resp.length!=0 && resp[resp.length-1] == c){
      resp.pop()
    }else resp.push(c)
  }
  return resp.join('')
}

const doublesUpRegex = (s) => {
  return /(\w)\1/g.test(s) ? doubles(s.replace(/(\w)\1/g, "")) : s
}




let parrafo =
  "pkkmmfggtlbzeewwdpvhaaaaaaiiiiaatljuueevlnlfnssiitdaaccnoodfggteeggpeeiiaabtqquuggwwccrsslrggoonrtxaavqqtwwwwqqiineeeeeeiizaauummoocclzyyccfaazpccccruuplmmjwweetoossqqlfmmqqmmsszeewwfzffqqvyyvlrvbnyyrqqnuuvoolrhdzuujrleeccnzkktzuuggmmnssnlyyaaiiccyyblqqrdeessggoovfwwtiiuuyyyycceeoojssxaaiixlhoohqqfaawwoofxoowweebrnoovsspbvaabcczdvyyxluueesswwvhbssrvxfccbwwaatkkhpkkcceebfvdoobooqqssjpmmeeqqsspkkqqeeuuzzzccnnmmjneekkeerzyyeeggyyeeyyduuiiwwaarqqxlqqxfeeffbdeeztqqpmmyyhqqdlvtccwweelaaqqphggkkdiivaavmmyymmsszggnfvmmjlwwoonbbssdeeoojjiimmccuuccvboojkkjooaauuxdvyyccyytiiaalyyrmmpyyggqqggnfldpnluuiiqqyyzqqxyyxkkdxtkknzrfeehiijxfkkkkmmfjeewwqqlxggtiiooooeelqqqqooxgghiiooqqccmmtjggldccvoooossfeeqqlcchzqqdduurlbjoonyyzxpbtpuurggpoohssyyyyccyylmmfbnpiiccreeyyfuuaammxvpyyeeffyyvqqxqqjlxlmmeedloobiideelbqqggjbjzpxaapfkkfrvjsspkkmmkklvdxryyeeiipuuuuddmmuummoozmmtdbhduuaaeessvrpeemmeezeemmjrookkiiggkkmmaajiimmoortjmmnphriiqqtoofoorbmmfjmmyyfvggnjhkkooaawwiiooqqvggggeemmsseekkaalteetmmtmmqqiifpoolwwpdiioooommggxiixaahneeldeewwpooliissqqhdlggsspeekkkklyyuuxooaatfljoovaabpkkccqqccjniiztjwwpzggsspdnqqdqqwwqqmmluuxsshmmyyvggmmggpxtooheezdtxvjjxtaapuuqqyyssmmhtxhlsszljpzheeyyuuggeevrbbviioowwccmmrlccaauultiilmmzjvooxzhwwaatiiyyqqlmmdyyhpccdwwroordeephqqqqxaaaaltriikkuuwwnnlxrxhoofccqqxmmuukkdfjnooooggssjyyvdyyvqqpeeggxvjwwssoommeebwwqqmmfaapwwvbqqmmccjkkiipwwxpxoozzkkhjzlkktaayyhpeeaaaafccyyuundiibhaayycczyywwqqvssxtyyppeemmriixpxjeetwwmmlzrtxtbeessuupvvdqqzqqfssrqqwwtjrxnfbyyuuhqqqqbvwwuukkxeeprwwkkthvooggkkggkkvjfjnoommzbliissbfkkmmzqqqqdxvzjmmdwwwwvphzqqqqlliiuuaadh";

let a = 'abbbzzzyy'

console.log(doubles(a));
console.log(doublesUp(a));
console.log(doublesUpRegex(a));

//pftlbzdpvhtljvlnlfntdndftpbtrlrnrtxvtnzlzfzprpljtlfzfzlrvbnrnvlrhdzjrlnztzlblrdvftjlxbrnvpbvbzdvxlvhbrvxfbthpbfvdbjzjnrzdrxlxfbdztphdlvtlphdznfvjlndvbxdvtlrpnfldpnlzdxtnzrfhjxjlxtlxhtjldvflhzrlbjnzxpbtprphlfbnprfxvpvxjlxldlbdlbjbjzpxprvjplvdxrpztdbhdvrpzjrjrtjnphrtfrbfjfvnjhvltfplpdhnldplhdlplxtfljvbpjnztjpzpdndlxhvpxthzdtxvxtphtxhlzljpzhvrvrtlzjvxzhtldxltrlxrxhfxdfjnjvdvpxvjbfpvbjpxpxhjzlthpfndbhzvxtrxpxjtlzrtxtbpdzfrtjrxnfbhbvxprthjfjnzblbfzdxvzjdvphzdh

//pftlbzdpvhtljvlnlfntdndftpbtrlrnrtxvtnzlzfzprpljtlfzfzvvlrvbnrnvlrhdzjrlnztznnlblrdvftjxxlhhffxbrnvpbvbzdvxlvhbrvxfbthpbfvdbjppzjnrzdrxlxfbdztphdlvtlphdvvznfvjlndvbjjxdvtlrpnfldpnlzxxdxtnzrfhjxffjlxtlxhtjldvflhzrlbjnzxpbtprphlfbnprfxvpvxjlxldlbdlbjbjzpxpffrvjplvdxrpztdbhdvrpzjrjrtjnphrtfrbfjfvnjhvltttfplpdxxhnldplhdlplxtfljvbpjnztjpzpdndlxhvpxthzdtxvxtphtxhlzljpzhvrvrlltlzjvxzhtldhpdrrdphxltrlxrxhfxdfjnjvdvpxvjbfpvbjpxpxhjzlthpfndbhzvxtrxpxjtlzrtxtbpdzfrtjrxnfbhbvxprthvvjfjnzblbfzdxvzjdvphzdh
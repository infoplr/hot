

const fs = require( "fs" ),
      print = v => console.log( v );

fs.writeFile( "fs.log", "log de teste", r => r ? print(r): print( "deu certo!" ) );


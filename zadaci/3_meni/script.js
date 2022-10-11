var jsonObj = [
    {
      "ID": 17,
      "parent": 11,
      "order": 3,
      "text": "Redo"
    },
    {
      "ID": 15,
      "parent": 32,
      "order": 18,
      "text": "View Licence"
    },
    {
      "ID": 72,
      "parent": 0,
      "order": 9,
      "text": "More"
    },
    {
      "ID": 14,
      "parent": 23,
      "order": 2,
      "text": "Open"
    },
    {
      "ID": 16,
      "parent": 23,
      "order": 11,
      "text": "Save"
    },
    {
      "ID": 21,
      "parent": 2,
      "order": 108,
      "text": "Copy"
    },
    {
      "ID": 2,
      "parent": 68,
      "order": 23,
      "text": "Clipboard"
    },
    {
      "ID": 53,
      "parent": 0,
      "order": 17,
      "text": "Help"
    },
    {
      "ID": 18,
      "parent": 2,
      "order": 43,
      "text": "Cut"
    },
    {
      "ID": 94,
      "parent": 32,
      "order": 9,
      "text": "Check for updates<"
    },
    {
      "ID": 44,
      "parent": 53,
      "order": 13,
      "text": "Documentation"
    },
    {
      "ID": 49,
      "parent": 53,
      "order": 55,
      "text": "About"
    },
    {
      "ID": 23,
      "parent": 0,
      "order": 3,
      "text": "File"
    },
    {
      "ID": 6,
      "parent": 23,
      "order": 0,
      "text": "New"
    },
    {
      "ID": 11,
      "parent": 68,
      "order": 4,
      "text": "Operations"
    },
    {
      "ID": 54,
      "parent": 2,
      "order": 700,
      "text": "Paste"
    },
    {
      "ID": 68,
      "parent": 0,
      "order": 8,
      "text": "Edit"
    },
    {
      "ID": 51,
      "parent": 11,
      "order": 2,
      "text": "Undo"
    },
    {
      "ID": 32,
      "parent": 49,
      "order": 94,
      "text": "More"
    }
  ]

  


var listEl =document.getElementById('id-0');
makeList(jsonObj,listEl);

function makeList( jsonObject, listElement){
  var pocetna = document.body.appendChild(document.createElement('ul'));
  for (var i in jsonObj) {
    if (jsonObj[i].parent===0) {
      var _node=pocetna.appendChild(document.createElement('li')).innerHTML=jsonObj[i].text;
      for (var j in jsonObj) {
        if (jsonObj[j].parent===jsonObj[i].ID) {
          var _node=pocetna.appendChild(document.createElement('ul')).innerHTML=jsonObj[j].text;
          for (var z in jsonObj) {
            if (jsonObj[z].parent===jsonObj[j].ID) {
              var _node=pocetna.appendChild(document.createElement('ul')).innerHTML=jsonObj[z].text;
            }
          }
        }
      }
    }
  }
}



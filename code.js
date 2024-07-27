function updateForms() {
    const id = "Enter your SpreadSheet ID here!";
    const sheetName = "Enter the Sheet's name of items want to be auto uploads!";
  
    const ss = SpreadsheetApp.openById(id);
    const sheet = ss.getSheetByName(sheetName);
    const range = sheet.getDataRange().getValues(); // i recommend you do a sheet only to set data'll be upload
    
    const choiceValues = [...new Set(range.map(row => row[0]).filter(value => value))];
  
    const form = FormApp.openById("Enter your Forms ID here!");
    const items = form.getItems();
  
    for (var i in items) {
      if (items[i].getTitle() == "Set here the question name of Forms!") {
        items[i].asListItem().setChoiceValues(choiceValues);
        return;
      }
    }
    Logger.log("Nothing found...");
  }
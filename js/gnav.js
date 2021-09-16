function allcheck( tf ) {
   var ElementsCount = document.sampleform.elements.length; // チェックボックスの数
   for( i=0 ; i<ElementsCount ; i++ ) {
      document.sampleform.elements[i].checked = tf; // ON・OFFを切り替え
   }
}

document.querySelector('#btn-acessar').onclick = evt => {
    JSHelpers.toggleClass('.container-right', 'active');
    JSHelpers.toggleClass('.container-left', 'active');
    JSHelpers.toggleClass('.container', 'active');   
  }  
  
  class JSHelpers{
    static toggleClass(el, clazz){
      let _el = document.querySelector(el);
      
      _el.className.includes('active') ?
        _el.className = _el.className.replace(clazz, ''):
        _el.className += ' ' + clazz;  
    }
  }
  



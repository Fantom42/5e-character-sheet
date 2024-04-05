// I'm sure there's a better way to do this but it's late and this doesn't have to be good, it just has to work
document.getElementById("lvl1").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl1slots").appendChild(check)
  })
  
  document.getElementById("neglvl1").addEventListener("click", function() {
    document.getElementById("lvl1slots").removeChild( document.getElementById("lvl1slots").lastChild)
  })
  
  document.getElementById("lvl2").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl2slots").appendChild(check)
  })
  
  document.getElementById("neglvl2").addEventListener("click", function() {
    document.getElementById("lvl2slots").removeChild( document.getElementById("lvl2slots").lastChild)
  })
  
  document.getElementById("lvl3").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl3slots").appendChild(check)
  })
  
  document.getElementById("neglvl3").addEventListener("click", function() {
    document.getElementById("lvl3slots").removeChild( document.getElementById("lvl3slots").lastChild)
  })
  
  document.getElementById("lvl4").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl4slots").appendChild(check)
  })
  
  document.getElementById("neglvl4").addEventListener("click", function() {
    document.getElementById("lvl4slots").removeChild( document.getElementById("lvl4slots").lastChild)
  })
  
  document.getElementById("lvl5").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl5slots").appendChild(check)
  })
  
  document.getElementById("neglvl5").addEventListener("click", function() {
    document.getElementById("lvl5slots").removeChild( document.getElementById("lvl5slots").lastChild)
  })
  
  document.getElementById("lvl6").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl6slots").appendChild(check)
  })
  
  document.getElementById("neglvl6").addEventListener("click", function() {
    document.getElementById("lvl6slots").removeChild( document.getElementById("lvl6slots").lastChild)
  })
  
  document.getElementById("lvl7").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl7slots").appendChild(check)
  })
  
  document.getElementById("neglvl7").addEventListener("click", function() {
    document.getElementById("lvl7slots").removeChild( document.getElementById("lvl7slots").lastChild)
  })
  
  document.getElementById("lvl8").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl8slots").appendChild(check)
  })
  
  document.getElementById("neglvl8").addEventListener("click", function() {
    document.getElementById("lvl8slots").removeChild( document.getElementById("lvl8slots").lastChild)
  })
  
  document.getElementById("lvl9").addEventListener("click", function() {
    const check = document.createElement("input")
    check.setAttribute("type","checkbox")
    check.setAttribute("class","spellslot")
    document.getElementById("lvl9slots").appendChild(check)
  })
  
  document.getElementById("neglvl9").addEventListener("click", function() {
    document.getElementById("lvl9slots").removeChild( document.getElementById("lvl9slots").lastChild)
  })
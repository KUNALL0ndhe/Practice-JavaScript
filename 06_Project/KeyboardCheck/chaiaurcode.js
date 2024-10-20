

let insert = document.getElementById('insert');

window.addEventListener('keydown', (e)=> {
  insert.innerHTML = `
  <div class="key">
  <table>
  <tr>
    <th>Key</th>
    <th>clicked</th>
  </tr>
  <tr>
    <td>${e.code === ' ' ? 'space' : e.code}</td>
    <td>${e.key}</td>
  </tr>
</table>
  </div>
  , `
})


console.log(insert)
const allowDrop = (ev) => {
  ev.preventDefault();
};

const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
};

const drop = (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (event.target === event.currentTarget) {
    event.currentTarget.appendChild(document.getElementById(data));
  } else {
    event.currentTarget.insertBefore(document.getElementById(data), event.target.closest('.draggablePage'));
  }
};

fetch('leaderList.json')
  .then(r => r.json())
  .then(leaderList => {
    Object.keys(leaderList).forEach(region => {
    
      let title = document.createElement('h3');
      title.innerText = region;
    
      let hr = document.createElement('hr');
    
      let ret = document.createElement('span');
      ret.appendChild(title);
      ret.appendChild(hr);
    
      leaderList[region].forEach(leader => {
          let el = document.createElement('img');
          el.src = leader.src;
          el.id = leader.id;
          el.draggable = true;
          el.ondragstart = () => drag(event);
    
          ret.appendChild(el);
        }
      );
    
      document.getElementById('append-zone').appendChild(ret);
    });    
  });




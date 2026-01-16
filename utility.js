function toggleSidebar() {
  document.querySelector('.sidebar:not(.positions)').classList.toggle('collapsed');
}

function togglePositions() {
  document.querySelector('.sidebar.positions').classList.toggle('collapsed');
}

function showMap(mapId) {
  document.querySelectorAll('.map-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.sidebar:not(.positions) .menu-item').forEach(item => {
    item.classList.remove('active');
  });
  
  document.getElementById(mapId).classList.add('active');
  document.querySelector(`[data-map="${mapId}"]`).classList.add('active');
  
  document.querySelectorAll('.position-group').forEach(group => {
    group.style.display = 'none';
  });
  
  const positionGroup = document.querySelector(`.position-group[data-for="${mapId}"]`);
  if (positionGroup) {
    positionGroup.style.display = 'flex';
  }
  
  document.querySelectorAll('#positions-menu .menu-item').forEach(item => {
    item.classList.remove('active');
  });
  
  const defaultContent = document.querySelector(`#${mapId} .position-content[id$="-default"]`);
  if (defaultContent) {
    document.querySelectorAll(`#${mapId} .position-content`).forEach(content => {
      content.classList.remove('active');
    });
    defaultContent.classList.add('active');
  }
}

function showPosition(positionId) {
  document.querySelectorAll('#positions-menu .menu-item').forEach(item => {
    item.classList.remove('active');
  });
  
  document.querySelector(`[data-position="${positionId}"]`).classList.add('active');
  
  const activeMap = document.querySelector('.map-content.active');
  if (activeMap) {
    activeMap.querySelectorAll('.position-content').forEach(content => {
      content.classList.remove('active');
    });
    
    const positionContent = document.getElementById(positionId);
    if (positionContent) {
      positionContent.classList.add('active');
    }
  }
}

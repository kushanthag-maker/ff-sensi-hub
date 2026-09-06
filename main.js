// Free Fire Sensi Calculation Engine

const sensiPresets = {
  samsung: {
    '2gb': { gen: 100, red: 100, s2: 100, s4: 100, snip: 55, free: 70, dpi: '460 DPI', fire: '54%' },
    '3gb': { gen: 100, red: 98, s2: 95, s4: 92, snip: 58, free: 75, dpi: '480 DPI', fire: '50%' },
    '4gb': { gen: 98, red: 95, s2: 92, s4: 88, snip: 62, free: 75, dpi: '500 DPI', fire: '48%' },
    '6gb': { gen: 95, red: 92, s2: 89, s4: 84, snip: 65, free: 80, dpi: '520 DPI', fire: '45%' },
    '8gb': { gen: 92, red: 88, s2: 85, s4: 80, snip: 68, free: 80, dpi: '540 DPI', fire: '42%' }
  },
  xiaomi: {
    '2gb': { gen: 100, red: 100, s2: 100, s4: 98, snip: 60, free: 70, dpi: '450 DPI', fire: '52%' },
    '3gb': { gen: 100, red: 97, s2: 94, s4: 90, snip: 62, free: 75, dpi: '470 DPI', fire: '49%' },
    '4gb': { gen: 97, red: 94, s2: 90, s4: 86, snip: 65, free: 78, dpi: '490 DPI', fire: '46%' },
    '6gb': { gen: 94, red: 90, s2: 86, s4: 82, snip: 68, free: 80, dpi: '510 DPI', fire: '44%' },
    '8gb': { gen: 90, red: 86, s2: 82, s4: 78, snip: 70, free: 85, dpi: '530 DPI', fire: '40%' }
  },
  apple: {
    '2gb': { gen: 96, red: 92, s2: 88, s4: 85, snip: 50, free: 70, dpi: 'Default (iOS)', fire: '45%' },
    '3gb': { gen: 94, red: 90, s2: 86, s4: 82, snip: 55, free: 72, dpi: 'Default (iOS)', fire: '43%' },
    '4gb': { gen: 92, red: 88, s2: 84, s4: 80, snip: 58, free: 75, dpi: 'Default (iOS)', fire: '40%' },
    '6gb': { gen: 88, red: 84, s2: 80, s4: 76, snip: 60, free: 78, dpi: 'Default (iOS)', fire: '38%' },
    '8gb': { gen: 85, red: 80, s2: 76, s4: 72, snip: 62, free: 80, dpi: 'Default (iOS)', fire: '36%' }
  },
  realme: {
    '2gb': { gen: 100, red: 100, s2: 98, s4: 95, snip: 58, free: 72, dpi: '450 DPI', fire: '52%' },
    '3gb': { gen: 99, red: 96, s2: 93, s4: 89, snip: 60, free: 75, dpi: '475 DPI', fire: '48%' },
    '4gb': { gen: 96, red: 93, s2: 90, s4: 85, snip: 64, free: 78, dpi: '500 DPI', fire: '45%' },
    '6gb': { gen: 93, red: 89, s2: 85, s4: 80, snip: 67, free: 82, dpi: '520 DPI', fire: '42%' },
    '8gb': { gen: 89, red: 85, s2: 81, s4: 77, snip: 70, free: 85, dpi: '540 DPI', fire: '39%' }
  },
  vivo: {
    '2gb': { gen: 100, red: 100, s2: 99, s4: 96, snip: 55, free: 70, dpi: '455 DPI', fire: '53%' },
    '3gb': { gen: 98, red: 95, s2: 92, s4: 88, snip: 60, free: 75, dpi: '480 DPI', fire: '49%' },
    '4gb': { gen: 95, red: 92, s2: 88, s4: 84, snip: 63, free: 77, dpi: '505 DPI', fire: '46%' },
    '6gb': { gen: 92, red: 88, s2: 84, s4: 80, snip: 66, free: 80, dpi: '525 DPI', fire: '43%' },
    '8gb': { gen: 88, red: 84, s2: 80, s4: 75, snip: 70, free: 85, dpi: '545 DPI', fire: '40%' }
  },
  oppo: {
    '2gb': { gen: 100, red: 100, s2: 98, s4: 95, snip: 56, free: 70, dpi: '460 DPI', fire: '52%' },
    '3gb': { gen: 98, red: 95, s2: 91, s4: 87, snip: 60, free: 74, dpi: '485 DPI', fire: '48%' },
    '4gb': { gen: 95, red: 91, s2: 87, s4: 83, snip: 64, free: 78, dpi: '510 DPI', fire: '45%' },
    '6gb': { gen: 91, red: 87, s2: 83, s4: 79, snip: 67, free: 82, dpi: '530 DPI', fire: '42%' },
    '8gb': { gen: 87, red: 83, s2: 79, s4: 74, snip: 70, free: 85, dpi: '550 DPI', fire: '39%' }
  },
  infinix: {
    '2gb': { gen: 100, red: 100, s2: 100, s4: 99, snip: 55, free: 70, dpi: '460 DPI', fire: '55%' },
    '3gb': { gen: 100, red: 98, s2: 95, s4: 92, snip: 58, free: 75, dpi: '485 DPI', fire: '51%' },
    '4gb': { gen: 98, red: 95, s2: 91, s4: 87, snip: 62, free: 78, dpi: '510 DPI', fire: '47%' },
    '6gb': { gen: 94, red: 91, s2: 87, s4: 82, snip: 66, free: 82, dpi: '535 DPI', fire: '44%' },
    '8gb': { gen: 90, red: 86, s2: 82, s4: 78, snip: 70, free: 85, dpi: '560 DPI', fire: '41%' }
  },
  pc: {
    'all': { gen: 0, red: 85, s2: 75, s4: 65, snip: 40, free: 50, dpi: '800 / 1200 Mouse DPI', fire: '10%' }
  }
};

const brandSelect = document.getElementById('brandSelect');
const ramSelect = document.getElementById('ramSelect');
const playStyleSelect = document.getElementById('playStyleSelect');
const refreshRateSelect = document.getElementById('refreshRateSelect');
const generateBtn = document.getElementById('generateBtn');
const copyAllBtn = document.getElementById('copyAllBtn');

function calculateSensi() {
  if (!brandSelect || !ramSelect || !playStyleSelect || !refreshRateSelect) return;

  const brand = brandSelect.value;
  let ram = ramSelect.value;
  const style = playStyleSelect.value;
  const refresh = refreshRateSelect.value;

  let base;
  if (brand === 'pc') {
    base = { ...sensiPresets.pc.all };
  } else {
    if (ram === 'pc') ram = '8gb';
    const brandData = sensiPresets[brand] || sensiPresets.samsung;
    base = { ...(brandData[ram] || brandData['4gb']) };
  }

  // Modifiers based on Playstyle
  if (brand !== 'pc') {
    if (style === 'onetap') {
      base.gen = Math.min(100, base.gen + 2);
      base.red = Math.min(100, base.red + 3);
    } else if (style === 'smg') {
      base.gen = Math.max(80, base.gen - 2);
      base.red = Math.max(75, base.red - 2);
      base.s2 = Math.min(100, base.s2 + 2);
    } else if (style === 'sniper') {
      base.snip = Math.max(30, base.snip - 15);
      base.gen = Math.max(80, base.gen - 5);
    }

    // Refresh rate adjustment
    if (refresh === '120hz') {
      base.gen = Math.max(75, base.gen - 3);
    } else if (refresh === '60hz') {
      base.gen = Math.min(100, base.gen + 2);
    }
  }

  // Update DOM
  const tagEl = document.getElementById('resultDeviceTag');
  if (tagEl) tagEl.innerText = `${brand.toUpperCase()} • ${ram.toUpperCase()} • ${refresh.toUpperCase()}`;

  const setVal = (id, barId, val) => {
    const el = document.getElementById(id);
    const bar = document.getElementById(barId);
    if (el) el.innerText = val;
    if (bar) bar.style.width = `${val}%`;
  };

  setVal('valGeneral', 'barGeneral', base.gen);
  setVal('valRedDot', 'barRedDot', base.red);
  setVal('val2x', 'bar2x', base.s2);
  setVal('val4x', 'bar4x', base.s4);
  setVal('valSniper', 'barSniper', base.snip);
  setVal('valFreeLook', 'barFreeLook', base.free);

  const fireBtnEl = document.getElementById('valFireBtn');
  const dpiEl = document.getElementById('valDpi');
  if (fireBtnEl) fireBtnEl.innerText = base.fire;
  if (dpiEl) dpiEl.innerText = base.dpi;

  const dragStyleEl = document.getElementById('valDragStyle');
  const pointerSpeedEl = document.getElementById('valPointerSpeed');

  if (brand === 'pc') {
    if (dragStyleEl) dragStyleEl.innerText = 'Low X/Y Ratio Drag (X: 1.4, Y: 0.65)';
    if (pointerSpeedEl) pointerSpeedEl.innerText = 'Windows 6/11 (Default)';
  } else if (style === 'onetap') {
    if (dragStyleEl) dragStyleEl.innerText = "Fast 'V' Drag Up";
    if (pointerSpeedEl) pointerSpeedEl.innerText = 'Maximum Pointer Speed';
  } else {
    if (dragStyleEl) dragStyleEl.innerText = 'Smooth Straight Drag';
    if (pointerSpeedEl) pointerSpeedEl.innerText = 'Fast Level';
  }
}

if (generateBtn) {
  generateBtn.addEventListener('click', () => {
    generateBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> CALCULATING...';
    setTimeout(() => {
      calculateSensi();
      generateBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> GENERATE PERFECT SENSI';
    }, 250);
  });
}

if (copyAllBtn) {
  copyAllBtn.addEventListener('click', () => {
    const brand = brandSelect ? brandSelect.options[brandSelect.selectedIndex].text : 'Device';
    const gen = document.getElementById('valGeneral')?.innerText || '100';
    const red = document.getElementById('valRedDot')?.innerText || '95';
    const s2 = document.getElementById('val2x')?.innerText || '90';
    const s4 = document.getElementById('val4x')?.innerText || '85';
    const snip = document.getElementById('valSniper')?.innerText || '60';
    const free = document.getElementById('valFreeLook')?.innerText || '75';
    const fire = document.getElementById('valFireBtn')?.innerText || '48%';
    const dpi = document.getElementById('valDpi')?.innerText || '500 DPI';

    const textToCopy = `⚡ FF SENSI HUB SETTINGS ⚡
Device: ${brand}
• General: ${gen}
• Red Dot: ${red}
• 2X Scope: ${s2}
• 4X Scope: ${s4}
• Sniper Scope: ${snip}
• Free Look: ${free}
• Fire Button Size: ${fire}
• DPI: ${dpi}
Generated with FF Sensi Hub`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = copyAllBtn.innerHTML;
      copyAllBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        copyAllBtn.innerHTML = originalText;
      }, 2000);
    }).catch(() => {
      alert('Copied to clipboard!');
    });
  });
}

// Initial calculation
calculateSensi();

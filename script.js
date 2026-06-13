// CONFIGURATION ET BASE DE DONNÉES DES PIÈCES
const laborCategories = [
    "M O TÔLERIE",
    "M O PEINTURE",
    "M O ELECTRIQUE",
    "M O MÉCANIQUE",
    "AUTO DIAGNOSTIQUE",
    "PARALLELISME / EQUILIBRAGE",
    "PROGRAMMATION D'OPTIQUE AV/D",
    "PROGRAMMATION D'OPTIQUE AV/G"
];

const PARTS_DB = {
    'CARROSSERIE': [
        'AIGUILLE DE COMPTEUR',
        'AILE AR DR',
        'AILE AR G',
        'AILE ARRIERE DROITE',
        'AILE ARRIERE GAUCHE',
        'AILE AV DR',
        'AILE AV G',
        'AILE AVANT DROITE',
        'AILE AVANT GAUCHE',
        'AMORTISSEUR DE CHOC',
        'ANTENNE',
        'ARMATURE AVANT',
        'BAGUETTE DE PORTE',
        'BAS DE CAISSE',
        'BAS DE CAISSE AV DR',
        'BAS DE CAISSE AV G',
        'BOUCHON DE RESERVOIR',
        'BOUCLIER ARRIERE',
        'BOUCLIER AVANT',
        'CALANDRE',
        'CALANDRE AV',
        'CAPOT AV',
        'CAPOT AVANT',
        'CHARNIERE DE CAPOT',
        'COQUE DE RETROVISEUR',
        'DOUBLURE D\'AILE',
        'ENJOLIVEUR',
        'ENJOLIVEUR DE ROUE',
        'FEU AR DR',
        'FEU AR G',
        'FEU ARRIERE DROIT',
        'FEU ARRIERE GAUCHE',
        'GLACE DE RETROVISEUR',
        'GRILLE DE CALANDRE',
        'HAILLON ARRIERE',
        'HAYON AR',
        'JANTE ALLIAGE',
        'JANTE ALU',
        'JANTE TOLE',
        'JOINT DE PARE-BRISE',
        'MALLE ARRIERE',
        'MIROIR DE RETROVISEUR',
        'OPTIQUE AVANT DROIT',
        'OPTIQUE AVANT GAUCHE',
        'PARE-BRISE AV',
        'PARE-BRISE AVANT',
        'PARE-CHOC ARRIERE',
        'PARE-CHOC AVANT',
        'PARE-CHOCS AR',
        'PARE-CHOCS AV',
        'PASSAGE DE ROUE',
        'PHARE ANTIBROUILLARD',
        'PHARE AV DR',
        'PHARE AV G',
        'PLATEAU DE BENNE',
        'POIGNEE DE PORTE',
        'PORTE AR DR',
        'PORTE AR G',
        'PORTE ARRIERE DROITE',
        'PORTE ARRIERE GAUCHE',
        'PORTE AV DR',
        'PORTE AV G',
        'PORTE AVANT DROITE',
        'PORTE AVANT GAUCHE',
        'REMPLISSAGE DE CARBURANT',
        'RETROVISEUR DROIT',
        'RETROVISEUR GAUCHE',
        'RÉTROVISEUR AV DR',
        'RÉTROVISEUR AV G',
        'SERRURE DE PORTE',
        'SPOILER',
        'SUPPORT DE PARE-CHOC',
        'TRAPPE A ESSENCE',
        'TRAVERSE ARRIERE',
        'TRAVERSE AVANT',
        'VITRE LATERALE',
        'VITRE LATÉRALE'
    ],
    'MÉCANIQUE (Pièce)': [
        'ALTERNATEUR',
        'AMORTISSEUR AR',
        'AMORTISSEUR ARRIERE',
        'AMORTISSEUR AV',
        'AMORTISSEUR AVANT',
        'BATTERIE',
        'BLOC MOTEUR',
        'BOITE DE VITESSES',
        'BOÎTE VITESSES',
        'BRAS DE SUSPENSION',
        'CALCULATEUR MOTEUR ECU',
        'CARDAN DR',
        'CARDAN DROIT',
        'CARDAN G',
        'CARDAN GAUCHE',
        'CATALYSEUR',
        'COLLECTEUR D\'ECHAPPEMENT',
        'COMPRESSEUR CLIM',
        'COMPRESSEUR DE CLIM',
        'CONDENSEUR',
        'COURROIE DISTRIBUTION',
        'CREMAILLERE DE DIRECTION',
        'CRÉMAILLÈRE DIRECTION',
        'CULASSE',
        'DEMARREUR',
        'DISQUE DE FREIN DROIT',
        'DISQUE DE FREIN GAUCHE',
        'DISQUE FREIN AR',
        'DISQUE FREIN AV',
        'DÉBITMÈTRE AIR',
        'ECHAPPEMENT COMPLET',
        'EMBRAYAGE COMPLET',
        'ETRIER DE FREIN',
        'FAISCEAU ELECTRIQUE',
        'FILTRE A AIR',
        'FILTRE A HUILE',
        'FILTRE A POLLEN',
        'INTERCOOLER',
        'KIT EMBRAYAGE',
        'MOTEUR COMPLET',
        'MOYEU DE ROUE',
        'PLAQUETTES DE FREIN',
        'POMPE A EAU',
        'POMPE A INJECTION',
        'POMPE DE DIRECTION',
        'POMPE INJECTION',
        'POMPE À EAU',
        'RADIATEUR D\'EAU',
        'RADIATEUR DE CLIM',
        'ROLEMENT DE ROUE',
        'SILENCIEUX ARRIERE',
        'SOUPAPE',
        'SUPPORT MOTEUR',
        'TURBOCOMPRESSEUR',
        'VENTILATEUR MOTEUR',
        'VILEBREQUIN',
        'ÉTRIER FREIN'
    ],
    "PIÈCES D'USURE": [
        'ADBLUE SCR',
        'BALAIS D\'ESSUIE-GLACE',
        'BATTERIE',
        'COURROIE D\'ACCESSOIRE',
        'COURROIE DE DISTRIBUTION',
        'FILTRE AIR',
        'FILTRE CARBURANT',
        'FILTRE HUILE',
        'HUILE MOTEUR 5W30',
        'HUILE MOTEUR 5W40',
        'KIT DISTRIBUTION',
        'LIQUIDE DE FREIN',
        'LIQUIDE DE REFROIDISSEMENT',
        'LIQUIDE FREIN',
        'LIQUIDE REFROIDISSEMENT',
        'PLAQUETTE FREIN AR',
        'PLAQUETTE FREIN AV',
        'PNEU',
        'PNEUMATIQUE ARRIERE',
        'PNEUMATIQUE AVANT',
        'RECHARGE CLIM'
    ],
    
};

const VEHICLES_DB = {
    "DACIA": ["LOGAN", "SANDERO", "DUSTER", "DOKKER", "LODGY", "SPRING", "JOGGER", "LOGAN MCV"],
    "RENAULT": ["CLIO", "MEGANE", "KANGOO", "CAPTUR", "KADJAR", "TALISMAN", "SYMBOLS", "AUSTRAL", "ARKANA", "EXPRESS", "ZOE", "TWINGO"],
    "PEUGEOT": ["208", "308", "508", "2008", "30008", "5008", "PARTNER", "108", "RIFTER", "TRAVELLER", "EXPERT", "BOXER"],
    "HYUNDAI": ["ACCENT", "I10", "I20", "I30", "TUCSON", "SANTA FE", "CRETA", "KONA", "ELANTRA", "STARIA"],
    "TOYOTA": ["YARIS", "COROLLA", "HILUX", "PRADO", "RAV4", "C-HR", "AYGO", "AURIS", "LAND CRUISER", "YARIS CROSS"],
    "VOLKSWAGEN": ["GOLF", "POLO", "TIGUAN", "PASSAT", "TOUAREG", "CADDY", "T-ROC", "T-CROSS", "CRAFTER", "AMAROK"],
    "MERCEDES-BENZ": ["CLASSE A", "CLASSE C", "CLASSE E", "GLC", "GLE", "GLA", "VITO", "SPRINTER", "CLASSE S", "GLB"],
    "BMW": ["SERIE 1", "SERIE 3", "SERIE 5", "X1", "X3", "X5", "X6", "X4", "SERIE 4", "SERIE 7"],
    "AUDI": ["A1", "A3", "A4", "A6", "Q3", "Q5", "Q7", "Q2", "Q8", "A5"],
    "FORD": ["FIESTA", "FOCUS", "FUSION", "RANGER", "KUGA", "ECOSPORT", "TRANSIT", "PUMA", "MUSTANG"],
    "KIA": ["PICANTO", "RIO", "SPORTAGE", "SORENTO", "K5", "CEED", "NIRO", "SELTOS"],
    "NISSAN": ["MICRA", "QASHQAI", "JUKE", "X-TRAIL", "NAVARA", "PATROL", "LEAF"],
    "CITROEN": ["C3", "C4", "C5", "BERLINGO", "JUMPER", "C3 AIRCROSS", "C5 AIRCROSS", "C-ELYSEE", "JUMPY"],
    "FIAT": ["500", "TIPO", "DOBLO", "DUCATO", "FIORINO", "PANDA", "PUNTO", "500X"],
    "DODGE": ["NEON", "DURANGO", "RAM", "CHARGER", "CHALLENGER"],
    "JEEP": ["RENEGADE", "COMPASS", "CHEROKEE", "WRANGLER", "GRAND CHEROKEE"],
    "LAND ROVER": ["RANGE ROVER", "EVOQUE", "DISCOVERY", "DEFENDER", "VELAR", "FREELANDER"],
    "SUZUKI": ["SWIFT", "VITARA", "JIMNY", "CELERIO", "IGNIS", "BALENO", "S-CROSS"],
    "ISUZU": ["D-MAX", "NPR", "NMR"],
    "OPEL": ["CORSA", "ASTRA", "CROSSLAND", "GRANDLAND", "MOKKA", "COMBO"],
    "HONDA": ["CIVIC", "ACCORD", "CR-V", "HR-V", "JAZZ"],
    "SEAT": ["IBIZA", "LEON", "ATECA", "ARONA", "TARRACO"],
    "SKODA": ["OCTAVIA", "SUPERB", "KAMIQ", "KAROQ", "KODIAQ", "FABIA"],
    "PORSCHE": ["MACAN", "CAYENNE", "PANAMERA", "911", "TAYCAN"]
};

let parts = [];
let selectedChocs = [];
let editingIndex = -1;
let partsHistory = []; // Historique pour Ctrl+Z (max 30 snapshots)
const PARTS_HISTORY_MAX = 30;

function pushPartsSnapshot() {
    partsHistory.push(JSON.stringify(parts));
    if (partsHistory.length > PARTS_HISTORY_MAX) partsHistory.shift();
}

function undoParts() {
    if (partsHistory.length === 0) {
        showToast("Rien à annuler", "info");
        return;
    }
    parts = JSON.parse(partsHistory.pop());
    renderParts();
    saveDataDebounced();
    updatePDFData();
    showToast("Action annulée (Ctrl+Z)", "success");
}

function round2(n) { return Math.round(n * 100) / 100; }
function formatMoney(n) { return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function populateMakes() {
    let makeSelect = document.getElementById('veh_make');
    if (!makeSelect) return;

    // Si c'est encore un select, on le transforme en input + datalist
    if (makeSelect.tagName.toLowerCase() === 'select') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'veh_make';
        input.setAttribute('list', 'veh_make_list');
        input.placeholder = '-- Saisir ou choisir --';
        input.className = 'w-full p-1.5 rounded-lg bg-blue-50/30 border border-slate-200 input-field text-xs uppercase';
        input.autocomplete = 'off';
        input.oninput = function() {
            if (typeof updateModels === 'function') updateModels();
            if (typeof updateGenreImage === 'function') updateGenreImage();
            if (typeof updateGenreImage === 'function') updateGenreImage();
            if (typeof updatePDFData === 'function') updatePDFData();
            if (typeof saveDataDebounced === 'function') saveDataDebounced();
        };

        const datalist = document.createElement('datalist');
        datalist.id = 'veh_make_list';

        makeSelect.parentNode.insertBefore(input, makeSelect);
        makeSelect.parentNode.insertBefore(datalist, makeSelect);
        makeSelect.parentNode.removeChild(makeSelect);
        makeSelect = input;
    }

    const list = document.getElementById('veh_make_list');
    if (list) {
        list.innerHTML = '';
        Object.keys(VEHICLES_DB).sort().forEach(m => {
            list.innerHTML += `<option value="${m}">`;
        });
    }
}

function updateModels() {
    const make = document.getElementById('veh_make').value;
    const modelList = document.getElementById('veh_model_list');
    const modelInput = document.getElementById('veh_model');
    if (!modelList) return;
    modelList.innerHTML = '';
    if (modelInput) modelInput.value = '';
    if (VEHICLES_DB[make]) {
        VEHICLES_DB[make].sort().forEach(mod => {
            modelList.innerHTML += `<option value="${mod}">`;
        });
    }
}

// --- SAUVEGARDE ET PERSISTANCE ---
function saveData() {
    const data = {
        parts,
        selectedChocs,
        currentStep,
        maxStepReached,
        form: {}
    };
    document.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.id && el.type !== 'file' && el.type !== 'radio' && el.type !== 'checkbox') {
            data.form[el.id] = el.value;
        }
        if (el.type === 'radio' && el.checked) {
            data.form[el.name] = el.value;
        }
    });
    localStorage.setItem('betcam_expert_v64', JSON.stringify(data));
}

let saveTimeout;
function saveDataDebounced() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveData, 500);
}

function loadData() {
    const raw = localStorage.getItem('betcam_expert_v64');
    if (!raw) return;
    let data;
    try {
        data = JSON.parse(raw);
    } catch (e) {
        console.warn("Erreur de lecture de la sauvegarde locale :", e);
        localStorage.removeItem('betcam_expert_v64');
        return;
    }
    parts = data.parts || [];
    selectedChocs = data.selectedChocs || [];
    currentStep = data.currentStep || 1;
    maxStepReached = data.maxStepReached || 1;

    if (data.form) {
        for (let id in data.form) {
            const el = document.getElementById(id);
            if (el) {
                el.value = data.form[id];
                // Trigger UI update logic for specific fields
                if (id === 'ref_dossier') updateCieAssurance();
                if (id === 'cie_assurance') updateAgentList();
                if (id === 'veh_make') updateModels(); // Remplir la liste des modèles au chargement
                if (id === 'en_cours_rep_status') toggleEnCoursValidation();
                if (id === 'fin_travaux_status') toggleFinTravauxValidation();
                if (id === 'part_type') toggleFormContext();
                if (id === 'part_name') handleDesignationChange();
                if (id === 'report_type') {
                    try {
                        const escapedVal = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(data.form[id]) : data.form[id];
                        const rb = document.querySelector(`input[name="report_type"][value="${escapedVal}"]`);
                        if (rb) rb.checked = true;
                    } catch (err) {
                        console.warn("Error restoring report_type:", err);
                    }
                }
            } else {
                // Radio check fallback
                try {
                    const escapedVal = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(data.form[id]) : data.form[id];
                    const rb = document.querySelector(`input[name="${id}"][value="${escapedVal}"]`);
                    if (rb) rb.checked = true;
                } catch (err) {
                    console.warn(`Error restoring radio button fallback for ${id}:`, err);
                }
            }
        }
    }
    renderParts();
    updateIndemnite();
    calculImmo();
    // Restaurer les chocs visuellement
    selectedChocs.forEach(zone => {
        const btn = Array.from(document.querySelectorAll('.choc-zone')).find(b => b.innerText === zone);
        if (btn) btn.classList.add('active');
        const markId = 'mark_' + zone.replace('AV. GAUCHE', 'AVG').replace('AV. DROITE', 'AVD').replace('AVANT', 'AV').replace('ARRIERE', 'AR').replace('LATERAL GAUCHE', 'LATG').replace('LATERAL DROIT', 'LATD').replace('AR. GAUCHE', 'ARG').replace('AR. DROITE', 'ARD').replace('360 / GLOBAL', '360').replace('DESSUS', 'TOIT');
        const markEl = document.getElementById(markId);
        if (markEl) markEl.style.display = 'block';
    });
    goToStep(currentStep);
}

function addOrUpdatePart() {
    try {
        let name = document.getElementById('part_name').value.toUpperCase().trim();
        if (name === 'AUTRE') {
            name = (document.getElementById('part_name_manual').value || '').toUpperCase().trim();
        }
        const price = parseFloat(document.getElementById('part_price').value) || 0;
        const qty = parseFloat(document.getElementById('part_qty').value) || 1;
        const type = document.getElementById('part_type').value;
        const rate = parseFloat(document.getElementById('manual_rate').value) || 0;

        const sourceEl = document.querySelector('input[name="part_source"]:checked');
        const source = sourceEl ? sourceEl.value : 'ORIGINE';

        if (!name) return showToast("Saisir un nom de pièce", "error");

        pushPartsSnapshot();

        const existingTva = editingIndex > -1 ? (parts[editingIndex].tva !== false) : true;
        const existingTvaManual = editingIndex > -1 ? (parts[editingIndex].tvaManuallySet || false) : false;
        const part = { name, price, qty, type, rate, source, tva: existingTva, tvaManuallySet: existingTvaManual };

        if (editingIndex > -1) {
            parts[editingIndex] = part;
            editingIndex = -1;
            document.getElementById('btn_action_part').innerHTML = '<i class="fa-solid fa-plus-circle mr-2"></i> Ajouter au Devis';
        } else {
            parts.push(part);
        }

        renderParts();
        resetFormPart();
        saveDataDebounced();
        updatePDFData();
        showToast("Opération réussie", "success");
    } catch (error) {
        alert("Erreur addOrUpdatePart: " + error.message + "\n" + error.stack);
        console.warn(error);
    }
}

function editPart(idx) {
    const p = parts[idx];
    editingIndex = idx;
    document.getElementById('part_type').value = p.type;
    updateDesignations();
    
    const partNameSelect = document.getElementById('part_name');
    const partNameManual = document.getElementById('part_name_manual');
    if (partNameSelect) {
        if (PARTS_DB[p.type] && PARTS_DB[p.type].includes(p.name)) {
            partNameSelect.value = p.name;
            if (partNameManual) {
                partNameManual.value = "";
                partNameManual.classList.add("hidden");
            }
        } else {
            partNameSelect.value = "AUTRE";
            if (partNameManual) {
                partNameManual.value = p.name;
                partNameManual.classList.remove("hidden");
            }
        }
    }
    
    document.getElementById('part_price').value = p.price;
    document.getElementById('part_qty').value = p.qty;
    document.getElementById('manual_rate').value = p.rate;

    try {
        const escapedSource = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(p.source) : p.source;
        const sourceRadio = document.querySelector(`input[name="part_source"][value="${escapedSource}"]`);
        if (sourceRadio) sourceRadio.checked = true;
    } catch (err) {
        console.warn("Error restoring part source in editPart:", err);
    }

    document.getElementById('btn_action_part').innerHTML = '<i class="fa-solid fa-save mr-2"></i> Valider Modif.';
    window.scrollTo({ top: document.getElementById('part_name').offsetTop - 100, behavior: 'smooth' });
}

function cancelEdit() {
    editingIndex = -1;
    resetFormPart();
    document.getElementById('btn_action_part').innerHTML = '<i class="fa-solid fa-plus-circle mr-2"></i> Ajouter au Devis';
}

function addPart() { addOrUpdatePart(); }

function removePart(idx) {
    const partName = parts[idx] ? parts[idx].name : '';
    if (!confirm(`Supprimer "${partName}" du devis ?`)) return;
    pushPartsSnapshot();
    parts.splice(idx, 1);
    renderParts();
    saveDataDebounced();
    updatePDFData();
}

function togglePartTVA(idx, isChecked) {
    if (parts[idx]) {
        parts[idx].tva = isChecked;
        parts[idx].tvaManuallySet = true;
        renderParts();
        saveDataDebounced();
        updatePDFData();
    }
}

function isPartTVAEnabled(p, isTvaApplicable, garageType) {
    if (!isTvaApplicable) return false;
    if (p.tvaManuallySet) {
        return p.tva !== false;
    }
    if (laborCategories.includes(p.type)) {
        return p.tva !== false;
    }
    if (p.source === 'RECUPERABLE') {
        return false;
    }
    if (garageType === 'NORMALE' && p.source === 'ADAPTABLE') {
        return false;
    }
    return p.tva !== false;
}

function renderParts() {
    const table = document.getElementById('parts_table_body') || document.getElementById('parts-table-body');
    const summary = document.getElementById('resume-body');
    if (table) table.innerHTML = "";
    if (summary) summary.innerHTML = "";

    let tHT = 0, tTVA = 0, tVet = 0, tHTBrut = 0;
    const sums = {
        pieces: { ht: 0, vet: 0, tva: 0, ttc: 0 },
        tolerie: { ht: 0, vet: 0, tva: 0, ttc: 0 },
        peinture: { ht: 0, vet: 0, tva: 0, ttc: 0 },
        ingredients: { ht: 0, vet: 0, tva: 0, ttc: 0 },
        electricite: { ht: 0, vet: 0, tva: 0, ttc: 0 },
        mecanique: { ht: 0, vet: 0, tva: 0, ttc: 0 }
    };

    const lieuTypeEl = document.getElementById('lieu_type') || document.getElementById('lieu_reparation_type');
    const garageType = lieuTypeEl ? lieuTypeEl.value : '';
    const tvaGarageEl = document.getElementById('garage_tva_applicable');
    const isTvaApplicable = tvaGarageEl ? (tvaGarageEl.value === 'OUI') : true;

    parts.forEach((p, idx) => {
        const baseHT = round2(p.price * p.qty);
        const v = round2(baseHT * (p.rate / 100));
        const nht = round2(baseHT - v);

        // Règle TVA : Dépend du choix global du garage et de la case à cocher sur la ligne
        const activeTva = isPartTVAEnabled(p, isTvaApplicable, garageType);
        let rowTVA = activeTva ? round2(nht * 0.2) : 0;

        const totalLigne = round2(nht + rowTVA);

        tHTBrut += baseHT;
        tHT += nht; tTVA += rowTVA; tVet += v;

        let target = null;
        if (p.type === 'M O TÔLERIE') target = sums.tolerie;
        else if (p.type === 'M O PEINTURE') target = sums.peinture;
        else if (p.type === 'M O ELECTRIQUE' || p.type === 'AUTO DIAGNOSTIQUE' || p.type === 'PROGRAMMATION D\'OPTIQUE AV/D' || p.type === 'PROGRAMMATION D\'OPTIQUE AV/G') target = sums.electricite;
        else if (p.type === 'M O MÉCANIQUE' || p.type === 'PARALLELISME / EQUILIBRAGE') target = sums.mecanique;
        else if (p.type === 'FOURNITURE DE PEINTURE') target = sums.ingredients;
        else target = sums.pieces;

        if (target) {
            target.ht = round2(target.ht + baseHT);
            target.vet = round2(target.vet + v);
            target.tva = round2(target.tva + rowTVA);
            target.ttc = round2(target.ttc + totalLigne);
        }

        const isEN = (typeof currentLanguage !== 'undefined' && currentLanguage === 'EN');
        const displayName = isEN ? translatePartName(p.name) : p.name;
        const displaySource = isEN ? translatePartSource(p.source) : (p.source || '');

        table.insertAdjacentHTML('beforeend', `
                    <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
                        <td class="sticky-col p-3 text-sm font-bold text-slate-700">${displayName}</td>
                        <td class="p-3 text-sm text-center">${displaySource}</td>
                        <td class="p-3 text-sm text-center">${p.qty}</td>
                        <td class="p-3 text-sm text-right font-mono">${formatMoney(p.price)}</td>
                        <td class="p-3 text-sm text-center font-bold text-red-600">${p.rate}%</td>
                        <td class="p-3 text-center">
                            <input type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" ${activeTva ? 'checked' : ''} ${!isTvaApplicable ? 'disabled' : ''} onchange="togglePartTVA(${idx}, this.checked)">
                        </td>
                        <td class="p-3 text-sm text-right font-mono font-bold text-slate-800">${formatMoney(totalLigne)}</td>
                        <td class="p-3 text-center">
                            <div class="flex items-center justify-center gap-2">
                                <button onclick="editPart(${idx})" class="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onclick="removePart(${idx})" class="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `);
    });

    const addRow = (label, s) => {
        if (s.ht > 0 && summary) {
            summary.insertAdjacentHTML('beforeend', `
                        <tr class="border-b border-slate-100 last:border-0 hover:bg-blue-50/30 transition-colors">
                            <td class="py-2.5 px-3 text-xs font-bold text-slate-600 uppercase tracking-wider">${label}</td>
                            <td class="py-2.5 px-3 text-sm font-bold text-right text-slate-900 font-mono">${formatMoney(s.ht)} DH</td>
                            <td class="py-2.5 px-3 text-sm font-bold text-right text-rose-600 font-mono">-${formatMoney(s.vet)} DH</td>
                            <td class="py-2.5 px-3 text-sm font-bold text-right text-slate-900 font-mono">${formatMoney(s.tva)} DH</td>
                            <td class="py-2.5 px-3 text-sm font-bold text-right text-blue-700 font-mono bg-blue-50/50">${formatMoney(s.ttc)} DH</td>
                        </tr>
                    `);
        }
    };

    const translateLabel = (lbl) => {
        if (typeof currentLanguage === 'undefined' || currentLanguage !== 'EN') return lbl;
        const labelsMap = {
            "Fournitures": "Spare Parts",
            "Main d'Œuvre Tôlerie": "Labor Bodywork",
            "Peinture (MO)": "Painting Labor",
            "Ingrédients Peinture": "Paint Ingredients",
            "Électricité / Autres": "Electricity / Other",
            "Mécanique (MO)": "Mechanics Labor"
        };
        return labelsMap[lbl] || lbl;
    };

    addRow(translateLabel("Fournitures"), sums.pieces);
    addRow(translateLabel("Main d'Œuvre Tôlerie"), sums.tolerie);
    addRow(translateLabel("Peinture (MO)"), sums.peinture);
    addRow(translateLabel("Ingrédients Peinture"), sums.ingredients);
    addRow(translateLabel("Électricité / Autres"), sums.electricite);
    addRow(translateLabel("Mécanique (MO)"), sums.mecanique);

    const elTotalHt = document.getElementById('total-ht') || document.getElementById('sum_net_ht');
    const elTotalTva = document.getElementById('total-tva');
    const elTotalVet = document.getElementById('sum_vetuste');
    const elTotalTtc = document.getElementById('total-ttc') || document.getElementById('sum_net_ttc');

    if (elTotalHt) elTotalHt.innerText = formatMoney(tHTBrut);
    if (elTotalTva) elTotalTva.innerText = formatMoney(tTVA);
    if (elTotalVet) elTotalVet.innerText = formatMoney(tVet);
    if (elTotalTtc) elTotalTtc.innerText = formatMoney(round2(tHT + tTVA));

    updatePDFData();
}

function updateIndemnite() {
    const isReforme = (
        document.getElementById('val_venale').value ||
        document.getElementById('val_epave').value ||
        document.getElementById('val_venale_tech').value ||
        document.getElementById('val_epave_tech').value
    );

    const displayReforme = document.getElementById('reforme_status_display');
    if (displayReforme) {
        if (isReforme) {
            displayReforme.innerText = "Dossier en RÉFORME (Calcul sur VA - VE)";
            displayReforme.className = "text-center p-2 mb-4 bg-rose-100 text-rose-700 rounded-lg font-bold animate-pulse text-xs uppercase";
        } else {
            displayReforme.innerText = "Réparation Classique (Détail des pièces)";
            displayReforme.className = "text-center p-2 mb-4 bg-emerald-100 text-emerald-700 rounded-lg font-bold text-xs uppercase";
        }
    }

    const vvEconEl = document.getElementById('val_venale');
    const veEconEl = document.getElementById('val_epave');
    const vvTechEl = document.getElementById('val_venale_tech');
    const veTechEl = document.getElementById('val_epave_tech');

    const disableTech = (vvEconEl.value || veEconEl.value);
    const disableEcon = (vvTechEl.value || veTechEl.value);

    vvTechEl.disabled = disableTech;
    veTechEl.disabled = disableTech;
    vvTechEl.classList.toggle('opacity-50', disableTech);
    vvTechEl.classList.toggle('bg-slate-100', disableTech);
    veTechEl.classList.toggle('opacity-50', disableTech);
    veTechEl.classList.toggle('bg-slate-100', disableTech);

    vvEconEl.disabled = disableEcon;
    veEconEl.disabled = disableEcon;
    vvEconEl.classList.toggle('opacity-50', disableEcon);
    vvEconEl.classList.toggle('bg-slate-100', disableEcon);
    veEconEl.classList.toggle('opacity-50', disableEcon);
    veEconEl.classList.toggle('bg-slate-100', disableEcon);

    const vvEcon = parseFloat(vvEconEl.value) || 0;
    const veEcon = parseFloat(veEconEl.value) || 0;
    const vvTech = parseFloat(vvTechEl.value) || 0;
    const veTech = parseFloat(veTechEl.value) || 0;

    if (document.getElementById('indemnite_display')) {
        document.getElementById('indemnite_display').innerText = formatMoney(round2(vvEcon - veEcon)) + " DH";
    }
    if (document.getElementById('indemnite_tech_display')) {
        document.getElementById('indemnite_tech_display').innerText = formatMoney(round2(vvTech - veTech)) + " DH";
    }
    saveDataDebounced();
    updatePDFData();
}

// Vider les champs de réforme pour réinitialiser l'état selon la demande utilisateur
function clearReformeFields() {
    const val_venale = document.getElementById('val_venale');
    if (val_venale) val_venale.value = "";
    const val_epave = document.getElementById('val_epave');
    if (val_epave) val_epave.value = "";
    const val_venale_tech = document.getElementById('val_venale_tech');
    if (val_venale_tech) val_venale_tech.value = "";
    const val_epave_tech = document.getElementById('val_epave_tech');
    if (val_epave_tech) val_epave_tech.value = "";
    updateIndemnite();
}
// Exécution immédiate
setTimeout(clearReformeFields, 100);

function toggleChoc(zone, btn) {
    const idx = selectedChocs.indexOf(zone);
    if (idx > -1) {
        selectedChocs.splice(idx, 1);
        btn.classList.remove('active');
        const markId = 'mark_' + zone.replace('AV. GAUCHE', 'AVG').replace('AV. DROITE', 'AVD').replace('AVANT', 'AV').replace('ARRIERE', 'AR').replace('LATERAL GAUCHE', 'LATG').replace('LATERAL DROIT', 'LATD').replace('AR. GAUCHE', 'ARG').replace('AR. DROITE', 'ARD').replace('360 / GLOBAL', '360').replace('DESSUS', 'TOIT');
        const markEl = document.getElementById(markId);
        if (markEl) markEl.style.display = 'none';
    } else {
        selectedChocs.push(zone);
        btn.classList.add('active');
        const markId = 'mark_' + zone.replace('AV. GAUCHE', 'AVG').replace('AV. DROITE', 'AVD').replace('AVANT', 'AV').replace('ARRIERE', 'AR').replace('LATERAL GAUCHE', 'LATG').replace('LATERAL DROIT', 'LATD').replace('AR. GAUCHE', 'ARG').replace('AR. DROITE', 'ARD').replace('360 / GLOBAL', '360').replace('DESSUS', 'TOIT');
        const markEl = document.getElementById(markId);
        if (markEl) markEl.style.display = 'block';
    }
    document.getElementById('veh_choc_value').value = selectedChocs.join(', ');

    const uiDisplay = document.getElementById('choc_display_ui');
    if (uiDisplay) {
        uiDisplay.innerText = selectedChocs.join(', ') || "Aucune zone sélectionnée";
    }
    updatePDFData();
    saveDataDebounced();
}

function resetChocs() {
    if (!confirm("Voulez-vous vraiment effacer tous les points de choc ?")) return;
    selectedChocs = [];
    document.querySelectorAll('.choc-zone').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('[id^="mark_"]').forEach(el => el.style.display = 'none');
    const chocInput = document.getElementById('veh_choc_value');
    if (chocInput) chocInput.value = "";
    const uiDisplay = document.getElementById('choc_display_ui');
    if (uiDisplay) uiDisplay.innerText = "Aucune zone sélectionnée";
    updatePDFData();
    saveDataDebounced();
    showToast("Points de choc réinitialisés", "info");
}

// --- NOTIFICATIONS ---
function showToast(msg, type = 'info') {
    if (typeof currentLanguage !== 'undefined' && currentLanguage === 'EN') {
        const toastDict = {
            "Saisir un nom de pièce": "Please enter a part name",
            "Opération réussie": "Operation successful",
            "Points de choc réinitialisés": "Impact points reset",
            "Erreur: Template introuvable": "Error: Template not found",
            "Veuillez autoriser les pop-ups pour télécharger le PDF": "Please allow pop-ups to download the PDF",
            "Le rapport s'ouvre dans un nouvel onglet. Utilisez 'Enregistrer en PDF' dans la boîte de dialogue.": "The report is opening in a new tab. Select 'Save as PDF' in the print dialog.",
            "Erreur: Impossible d'ouvrir l'aperçu": "Error: Could not open preview",
            "Erreur lors de l'ouverture de l'aperçu": "Error opening preview",
            "Toutes les étapes sont complétées": "All steps are completed",
            "Veuillez remplir les champs obligatoires": "Please fill in the required fields",
            "La date sinistre ne peut être antérieure à la MEC": "The accident date cannot be before first registration",
            "La date sinistre ne peut être antérieure é  la MEC": "The accident date cannot be before first registration",
            "Liste des pièces vidée": "Parts list cleared",
            "Données de test injectées": "Test data injected",
            "La bibliothèque Excel n'est pas chargée": "Excel library is not loaded",
            "Export Excel réussi": "Excel export successful",
            "Erreur lors de l'export": "Export error",
            "La bibliothèque PDF n'est pas chargée.": "PDF library is not loaded.",
            "Analyse du PDF en cours...": "Analyzing PDF...",
            "Données importées avec succès !": "Data imported successfully!",
            "Erreur lors de la lecture du PDF": "Error reading PDF"
        };
        msg = toastDict[msg] || msg;
    }
    const c = document.getElementById('toast-container');
    if (!c) return;
    const d = document.createElement('div');
    d.className = 'toast';
    d.innerHTML = type === 'success' ? `<i class="fa-solid fa-check-circle text-green-400"></i> ${msg}` : type === 'error' ? `<i class="fa-solid fa-circle-exclamation text-rose-400"></i> ${msg}` : `<i class="fa-solid fa-info-circle text-blue-400"></i> ${msg}`;
    c.appendChild(d);
    setTimeout(() => { d.style.opacity = '0'; setTimeout(() => d.remove(), 300); }, 3000);
}

// FORMATAGE DE L'IMMATRICULATION
function updateImmatUI(selectEl, inputId) {
    const inputEl = document.getElementById(inputId);
    const type = selectEl.value;

    if (!type) {
        inputEl.disabled = true;
        inputEl.value = '';
        inputEl.placeholder = 'CHOISIR LE TYPE';
    } else {
        inputEl.disabled = false;
        if (type === 'Normale') {
            inputEl.placeholder = '123456';
        } else if (type === 'Arabe') {
            inputEl.placeholder = '25358-D-06';
        } else if (type === 'Châssis') {
            inputEl.placeholder = '17 CARACTÈRES';
            inputEl.maxLength = 17;
        } else if (type === 'Frontière') {
            inputEl.placeholder = '123456 WW';
        } else if (type === 'Ancienne') {
            inputEl.placeholder = '1234-56';
        }
    }

    if (type !== 'Châssis') {
        inputEl.removeAttribute('maxlength');
    }

    autoFormatImmat(inputEl, selectEl.id);
}

function autoFormatImmat(inputEl, selectId) {
    const type = document.getElementById(selectId).value;
    let val = inputEl.value;

    if (type !== 'Arabe') val = val.toUpperCase();

    let cursor = inputEl.selectionStart;
    let originalLength = val.length;

    if (type === 'Châssis') {
        val = val.replace(/[^A-Z0-9]/g, '');
    } else if (type === 'Normale' || type === 'WW') {
        val = val.replace(/[^0-9]/g, '');
    } else if (type === 'Arabe') {
        let clean = val.replace(/[^\dA-Za-z\u0600-\u06FF\-]/g, '');
        let lMatch = clean.match(/[A-Za-z\u0600-\u06FF]/);
        let l = lMatch ? lMatch[0].toUpperCase() : '';
        let parts;
        if (l) parts = clean.split(lMatch[0]);
        else if (clean.includes('-')) parts = clean.split('-');
        else parts = [clean];
        let d1 = (parts[0] || '').replace(/[^\d]/g, '').substring(0, 5);
        let d2 = parts.length > 1 ? parts.slice(1).join("").replace(/[^\d]/g, '').substring(0, 2) : '';
        if (l && d1.length > 0 && d1.length < 5) d1 = d1.padStart(5, '0');
        let res = d1;
        if (l || (val.includes('-') && res.length > 0)) res += '-' + l;
        let dashCount = val.split('-').length - 1;
        if (d2 || (dashCount > 1 && l)) res += (l ? '-' : '') + d2;
        if (val.endsWith('-') && !res.endsWith('-') && dashCount <= 2 && res.length > 0) res += '-';
        val = res;
    } else if (type === 'Ancienne') {
        let clean = val.replace(/[^0-9\-]/g, '');
        let numStr = clean.replace(/-/g, '');
        let digits1 = numStr.substring(0, 5);
        let digits2 = numStr.substring(5, 7);
        let res = digits1;
        if (digits2) res += '-' + digits2;
        else if (clean.endsWith('-') && digits1.length > 0) res += '-';
        val = res;
    }

    inputEl.value = val;
    let newLength = val.length;
    if (cursor && newLength !== originalLength) {
        let diff = newLength - originalLength;
        inputEl.setSelectionRange(cursor + diff, cursor + diff);
    }
    updatePDFData();
}

function padImmatOnBlur(inputEl, selectId) {
    const type = document.getElementById(selectId).value;
    let val = inputEl.value;
    if (type === 'Arabe' && val) {
        let clean = val.replace(/[^\dA-Za-z\u0600-\u06FF\-]/g, '');
        let lMatch = clean.match(/[A-Za-z\u0600-\u06FF]/);
        let l = lMatch ? lMatch[0].toUpperCase() : '';
        let parts;
        if (l) parts = clean.split(lMatch[0]);
        else if (clean.includes('-')) parts = clean.split('-');
        else parts = [clean];
        let d1 = (parts[0] || '').replace(/[^\d]/g, '').substring(0, 5);
        let d2 = parts.length > 1 ? parts.slice(1).join("").replace(/[^\d]/g, '').substring(0, 2) : '';
        if (d1.length > 0 && d1.length < 5) d1 = d1.padStart(5, '0');
        if (d2.length > 0 && d2.length < 2) d2 = d2.padStart(2, '0');
        let res = d1;
        if (l || (val.includes('-') && res.length > 0)) res += '-' + l;
        let dashCount = val.split('-').length - 1;
        if (d2 || (dashCount > 1 && l)) res += (l ? '-' : '') + d2;
        inputEl.value = res;
        autoFormatImmat(inputEl, selectId);
    }
}

function previewPhoto(input, previewId, placeholderId) {
    const previewUI = document.getElementById(previewId);
    const placeholderUI = document.getElementById(placeholderId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const MAX_SIZE = 400;
                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.3);
                previewUI.src = compressedDataUrl;
                previewUI.classList.remove('hidden');
                placeholderUI.classList.add('hidden');
                updatePDFData();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        previewUI.classList.add('hidden');
        placeholderUI.classList.remove('hidden');
        previewUI.src = "";
        updatePDFData();
    }
}

function formatDateFR(dateStr) {
    if (!dateStr || dateStr === "--") return "";
    const parts = dateStr.split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateStr;
}

function updatePDFData() {
    const models = ['pdf-template-source', 'pdf-template-source-b'];

    models.forEach(modelId => {
        const template = document.getElementById(modelId);
        if (!template) return;

        const ref = (document.getElementById('ref_dossier') || {}).value || "S/R";
        const setClassText = (cls, val) => {
            let v = val || "";
            template.querySelectorAll('.' + cls).forEach(el => el.innerText = String(v).toUpperCase());
            template.querySelectorAll('.b_' + cls).forEach(el => el.innerText = String(v).toUpperCase());
        };

        const isEN = (typeof currentLanguage !== 'undefined' && currentLanguage === 'EN');
        setClassText('pdf_ref', ref);
        setClassText('pdf_date', new Date().toLocaleDateString(isEN ? 'en-US' : 'fr-FR'));
        setClassText('pdf_requerant', (document.getElementById('requerant_name') || {}).value);
        setClassText('pdf_assure', (document.getElementById('assure_name') || {}).value);
        setClassText('pdf_cie', (document.getElementById('cie_assurance') || {}).value);
        const garantieVal = (document.getElementById('garantie_sinistre') || {}).value || "";
        setClassText('pdf_garantie_val', garantieVal);
        setClassText('pdf_ref_sinistre', (document.getElementById('ref_sinistre') || {}).value);
        const typeExpInput = document.querySelector('input[name="report_type"]:checked');
        const typeExp = typeExpInput ? typeExpInput.value : "CONTRADICTOIRE";
        
        let typeExpText = typeExp;
        if (isEN) {
            const expMap = {
                'NORMAL': 'NORMAL',
                'CONTRADICTOIRE': 'CONTRADICTORY',
                'COLLÉGIALE': 'JOINT',
                'PRÉLIMINAIRE': 'PRELIMINARY',
                'ESTIMATIF': 'ESTIMATED'
            };
            typeExpText = expMap[typeExp] || typeExp;
        }

        template.querySelectorAll('.pdf_type_label').forEach(el => {
            el.innerText = typeExpText;
            let color = '#1e3a8a';
            if (typeExp === 'NORMAL') color = '#059669';
            else if (typeExp === 'COLLÉGIALE') color = '#4338ca';
            else if (typeExp === 'PRÉLIMINAIRE') color = '#0891b2';
            else if (typeExp === 'ESTIMATIF') color = '#475569';
            el.style.color = color;
        });
        const typeContainer = template.querySelector('.pdf_type_label_container');
        if (typeContainer) typeContainer.style.display = (typeExp === 'NORMAL') ? 'none' : 'inline';
        const blocAssure = template.querySelector('#pdf_bloc_assure');
        const blocTiers = template.querySelector('#pdf_bloc_tiers');
        const rowGarantie = template.querySelector('#pdf_row_garantie_collegiale');
        if (typeExp === 'COLLÉGIALE') {
            if (blocTiers) blocTiers.style.display = 'table-cell';
            if (blocAssure) blocAssure.style.width = '50%';
            if (rowGarantie) {
                rowGarantie.style.display = 'table-row';
                setClassText('pdf_garantie_collegiale', (document.getElementById('type_garantie_collegiale') || {}).value);
            }
        } else {
            if (blocTiers) blocTiers.style.display = 'table-cell';
            if (blocAssure) blocAssure.style.width = '50%';
            if (rowGarantie) rowGarantie.style.display = 'none';
        }
        const formatImmat = (v) => (v || "").trim().split('-').map(p => p.replace(/^0+(?!$)/, '')).join('-');
        const formatWW = (v) => {
            if (!v) return "";
            let clean = v.trim().toUpperCase().replace(/^W\s*/, '').replace(/\s+/g, '');
            return "WW" + clean;
        };
        const numImmatDef = (document.getElementById('ref_immat') || {}).value || "";
        const numImmatWW = (document.getElementById('ref_immat_ww') || {}).value || "";
        let finalImmatAssure = "";
        if (numImmatWW && numImmatDef) finalImmatAssure = `${formatWW(numImmatWW)} / ${formatImmat(numImmatDef)}`;
        else if (numImmatWW) finalImmatAssure = formatWW(numImmatWW);
        else finalImmatAssure = formatImmat(numImmatDef) || "--";
        setClassText('pdf_immat', finalImmatAssure);
        const vMake = (document.getElementById('veh_make') || {}).value || "";
        const vModel = (document.getElementById('veh_model') || {}).value || "";
        const vType = (document.getElementById('veh_type') || {}).value || "";
        let vehTexte = (vMake + " " + vModel).trim();
        if (vType) vehTexte += " - TYPE: " + vType;
        setClassText('pdf_vehicule', vehTexte);
        
        const genreEl = document.getElementById('veh_genre');
        let vGenre = "";
        if (genreEl) {
            if (genreEl.value === "NEW_MANUAL") {
                vGenre = (document.getElementById('veh_genre_manual') || {}).value || "";
            } else if (genreEl.selectedIndex > 0) { // skip index 0 which is "-- Choisir --"
                const selectedText = genreEl.options[genreEl.selectedIndex].text;
                vGenre = selectedText.includes("--") && genreEl.value === "" ? "" : selectedText;
            } else {
                vGenre = genreEl.value || "";
            }
        }
        
        setClassText('pdf_marque', vMake);
        setClassText('pdf_model', vModel);
        setClassText('pdf_genre', vGenre);
        setClassText('pdf_mission', formatDateFR((document.getElementById('date_visite') || {}).value));

        let vPuiss = (document.getElementById('veh_puissance') || {}).value || "";
        if (vPuiss !== "") {
            const digits = vPuiss.replace(/\D/g, '');
            if (digits) vPuiss = digits + " CV";
        }
        setClassText('pdf_genre_puiss', (vGenre && vPuiss) ? `${vGenre} / ${vPuiss}` : (vGenre || vPuiss));
        setClassText('pdf_chassis', (document.getElementById('veh_chassis') || {}).value || "");
        setClassText('pdf_carburant', (document.getElementById('veh_carburant') || {}).value || "");
        setClassText('pdf_police_assure', (document.getElementById('police_assure') || {}).value || "--");
        setClassText('pdf_intermediaire_assure', (document.getElementById('intermediaire_assure') || {}).value || "--");
        setClassText('pdf_nom_tiers', (document.getElementById('nom_tiers') || {}).value || "--");
        setClassText('pdf_veh_tiers', (document.getElementById('veh_tiers') || {}).value || "--");
        const numImmatTiersDef = (document.getElementById('immat_tiers') || {}).value || "";
        const numImmatTiersWW = (document.getElementById('immat_tiers_ww') || {}).value || "";
        let finalImmatTiers = "";
        if (numImmatTiersWW && numImmatTiersDef) finalImmatTiers = `${formatWW(numImmatTiersWW)} / ${formatImmat(numImmatTiersDef)}`;
        else if (numImmatTiersWW) finalImmatTiers = formatWW(numImmatTiersWW);
        else finalImmatTiers = formatImmat(numImmatTiersDef) || "--";
        setClassText('pdf_immat_tiers', finalImmatTiers);
        setClassText('pdf_cie_tiers', (document.getElementById('cie_tiers') || {}).value || "--");
        setClassText('pdf_police_tiers', (document.getElementById('police_tiers') || {}).value || "--");
        setClassText('pdf_ref_sinistre_tiers', (document.getElementById('ref_sinistre_tiers') || {}).value || "--");
        setClassText('pdf_intermediaire_tiers', (document.getElementById('intermediaire_tiers') || {}).value || "--");
        setClassText('pdf_mec', formatDateFR((document.getElementById('date_mec') || {}).value));
        setClassText('pdf_sinistre', formatDateFR((document.getElementById('date_sinistre') || {}).value));
        setClassText('pdf_visite', formatDateFR((document.getElementById('date_visite') || {}).value));
        setClassText('pdf_km', ((document.getElementById('veh_km') || {}).value || "") + " KM");
        const pAv = (document.getElementById('pneu_av') || {}).value;
        const pAr = (document.getElementById('pneu_ar') || {}).value;
        let pneusStr = [];
        if (pAv) pneusStr.push(`AV.G-AV.D : ${pAv}%`);
        if (pAr) pneusStr.push(`AR.G-AR.D : ${pAr}%`);
        setClassText('pdf_pneus', pneusStr.length > 0 ? pneusStr.join(' / ') : "--");
        setClassText('pdf_etat', (document.getElementById('veh_etat') || {}).value || "--");
        if (typeExp === 'COLLÉGIALE') {
            setClassText('pdf_marque_tiers', vMake || "");
            setClassText('pdf_type_tiers', vType || "");
            setClassText('pdf_genre_tiers', vGenre || "");
            setClassText('pdf_carburant_tiers', (document.getElementById('veh_carburant') || {}).value || "");
            setClassText('pdf_chassis_tiers', (document.getElementById('veh_chassis') || {}).value || "");
            setClassText('pdf_puissance_tiers', vPuiss || "");
            setClassText('pdf_immat_tiers_info', finalImmatAssure || "");
        } else {
            setClassText('pdf_marque_tiers', vMake || "");
            setClassText('pdf_type_tiers', vType || "");
            setClassText('pdf_genre_tiers', vGenre || "");
            setClassText('pdf_carburant_tiers', (document.getElementById('veh_carburant') || {}).value || "");
            setClassText('pdf_chassis_tiers', (document.getElementById('veh_chassis') || {}).value || "");
            setClassText('pdf_puissance_tiers', vPuiss || "");
            setClassText('pdf_immat_tiers_info', finalImmatAssure || "");
        }
        setClassText('pdf_mec_tiers', formatDateFR((document.getElementById('date_mec') || {}).value));
        const kmVal = (document.getElementById('veh_km') || {}).value;
        setClassText('pdf_km_tiers', kmVal ? kmVal + " KM" : "--");
        let pneusStrTiers = [];
        if (pAv) pneusStrTiers.push(`AV ${pAv}%`);
        if (pAr) pneusStrTiers.push(`AR ${pAr}%`);
        setClassText('pdf_pneus_tiers', pneusStrTiers.length > 0 ? pneusStrTiers.join('   ') : "--");
        setClassText('pdf_etat_tiers', (document.getElementById('veh_etat') || {}).value || "--");
        const chocMap = { 'AR. GAUCHE': 'AR. G', 'LATERAL GAUCHE': 'LAT. G', 'AV. GAUCHE': 'AV. G', 'ARRIERE': 'AR.', 'DESSUS': 'DES.', 'AVANT': 'AV.', 'AR. DROITE': 'AR. DR', 'LATERAL DROIT': 'LAT. DR', 'AV. DROITE': 'AV. DR', '360 / GLOBAL': '360/GLB' };
        const abbreviatedChocs = selectedChocs.map(c => chocMap[c] || c);
        setClassText('pdf_chocs', abbreviatedChocs.length > 0 ? abbreviatedChocs.join(' - ') : "NON RENSEIGNÉS");
        const photoPreview = document.getElementById('veh_photo_preview');
        const photoPreview2 = document.getElementById('veh_photo_preview_2');
        const pdfPhotoImg = template.querySelector('#pdf_photo_img');
        const pdfPhotoImg2 = template.querySelector('#pdf_photo_img_2');
        const pdfPhotoPlaceholder = template.querySelector('#pdf_photo_placeholder');
        const pdfChocVisualContainer = template.querySelector('#pdf_choc_visual_container');
        let hasPhotosCount = 0;
        if (photoPreview && photoPreview.src && !photoPreview.classList.contains('hidden') && pdfPhotoImg) {
            pdfPhotoImg.src = photoPreview.src;
            pdfPhotoImg.style.display = 'block';
            hasPhotosCount++;
        } else if (pdfPhotoImg) {
            pdfPhotoImg.src = '';
            pdfPhotoImg.style.display = 'none';
        }
        if (photoPreview2 && photoPreview2.src && !photoPreview2.classList.contains('hidden') && pdfPhotoImg2) {
            pdfPhotoImg2.src = photoPreview2.src;
            pdfPhotoImg2.style.display = 'block';
            hasPhotosCount++;
        } else if (pdfPhotoImg2) {
            pdfPhotoImg2.src = '';
            pdfPhotoImg2.style.display = 'none';
        }
        if (pdfChocVisualContainer) {
            pdfChocVisualContainer.querySelectorAll('[id^="pdf_mark_"]').forEach(el => el.style.display = 'none');
            if (hasPhotosCount === 0 && selectedChocs.length > 0) {
                pdfChocVisualContainer.style.display = 'flex';
                selectedChocs.forEach(zone => {
                    let markId = '';
                    if (zone === 'AV. GAUCHE') markId = 'pdf_mark_AVG';
                    else if (zone === 'AV. DROITE') markId = 'pdf_mark_AVD';
                    else if (zone === 'AVANT') markId = 'pdf_mark_AV';
                    else if (zone === 'ARRIERE') markId = 'pdf_mark_AR';
                    else if (zone === 'LATERAL GAUCHE') markId = 'pdf_mark_LATG';
                    else if (zone === 'LATERAL DROIT') markId = 'pdf_mark_LATD';
                    else if (zone === 'AR. GAUCHE') markId = 'pdf_mark_ARG';
                    else if (zone === 'AR. DROITE') markId = 'pdf_mark_ARD';
                    else if (zone === '360 / GLOBAL') markId = 'pdf_mark_360';
                    else if (zone === 'DESSUS') markId = 'pdf_mark_TOIT';
                    if (markId) {
                        const markEl = pdfChocVisualContainer.querySelector('#' + markId);
                        if (markEl) markEl.style.display = 'block';
                    }
                });
                if (pdfPhotoPlaceholder) pdfPhotoPlaceholder.style.display = 'none';
            } else {
                pdfChocVisualContainer.style.display = 'none';
                if (pdfPhotoPlaceholder && hasPhotosCount === 0) pdfPhotoPlaceholder.style.display = 'block';
            }
        }
        if (pdfPhotoPlaceholder) {
            if (hasPhotosCount > 0) pdfPhotoPlaceholder.style.display = 'none';
            else if (!pdfChocVisualContainer || selectedChocs.length === 0) pdfPhotoPlaceholder.style.display = 'block';
        }
        if (hasPhotosCount === 1) {
            if (pdfPhotoImg.style.display === 'block') { pdfPhotoImg.style.maxWidth = '100%'; pdfPhotoImg.style.width = '100%'; pdfPhotoImg.style.height = '100%'; pdfPhotoImg.style.objectFit = 'contain'; }
            if (pdfPhotoImg2.style.display === 'block') { pdfPhotoImg2.style.maxWidth = '100%'; pdfPhotoImg2.style.width = '100%'; pdfPhotoImg2.style.height = '100%'; pdfPhotoImg2.style.objectFit = 'contain'; }
        } else if (hasPhotosCount === 2) {
            pdfPhotoImg.style.maxWidth = '48%'; pdfPhotoImg.style.width = '48%'; pdfPhotoImg.style.height = '100%'; pdfPhotoImg.style.objectFit = 'contain';
            pdfPhotoImg2.style.maxWidth = '48%'; pdfPhotoImg2.style.width = '48%'; pdfPhotoImg2.style.height = '100%'; pdfPhotoImg2.style.objectFit = 'contain';
        }
        setClassText('pdf_lieu_nom', (document.getElementById('lieu_reparation_nom') || {}).value || "");
        const typeGarage = (document.getElementById('lieu_reparation_type') || {}).value || "NORMALE";
        setClassText('pdf_lieu_type', typeGarage);
        const pdfLieuTypeContainer = template.querySelector('.pdf_lieu_type_container');
        if (pdfLieuTypeContainer) pdfLieuTypeContainer.style.display = (typeGarage === 'NORMALE') ? 'none' : 'inline';
        setClassText('pdf_lieu_adresse', (document.getElementById('lieu_reparation_adresse') || {}).value || "");
        setClassText('pdf_date_expertise_table', formatDateFR((document.getElementById('date_visite') || {}).value) || "");
        const dateEnCoursVal = (document.getElementById('date_en_cours_rep') || {}).value;
        setClassText('pdf_en_cours_status', dateEnCoursVal ? "" : (document.getElementById('en_cours_rep_status') || {}).value || "NON");
        setClassText('pdf_date_en_cours', formatDateFR(dateEnCoursVal) || "");
        const dateFinVal = (document.getElementById('date_fin_travaux') || {}).value;
        setClassText('pdf_fin_travaux_status', dateFinVal ? "" : (document.getElementById('fin_travaux_status') || {}).value || "NON");
        setClassText('pdf_fin_travaux', formatDateFR(dateFinVal) || "");
        setClassText('pdf_entree_garage', formatDateFR((document.getElementById('date_entree_garage') || {}).value) || "");
        setClassText('pdf_jours_rep', ((document.getElementById('jours_rep_garagiste') || {}).value || "0") + " Jours");
        const cieAssuranceVal = ((document.getElementById('cie_assurance') || {}).value || "").toUpperCase();
        const rowDelaiImmo = template.querySelector('#pdf_delai_immo_row');
        if (rowDelaiImmo) {
            if (cieAssuranceVal === "CAT" || cieAssuranceVal.includes("CAT (CONTRADICTOIRE)")) rowDelaiImmo.style.display = 'none';
            else rowDelaiImmo.style.display = '';
        }
        const exp1 = (document.getElementById('expert_1_name') || {}).value || "";
        const exp2 = (document.getElementById('expert_2_name') || {}).value || "";
        setClassText('pdf_expert_1', exp1);
        setClassText('pdf_expert_2', exp2);
        const sig1 = template.querySelector('#pdf_signature_expert_1');
        const sig2 = template.querySelector('#pdf_signature_expert_2');
        const label1 = template.querySelector('#pdf_expert_1_label');
        const showSig2 = (typeExp !== 'NORMAL' && exp2.trim() !== "");
        if (sig1) sig1.style.display = 'table-cell';
        if (sig2) sig2.style.display = showSig2 ? 'table-cell' : 'none';
        if (label1) label1.innerHTML = showSig2 ? "1<sup>er</sup> Expert" : "Expert";
        const chocVal = (document.getElementById('veh_choc_value') || {}).value || "NON IDENTIFIÉ";
        template.querySelectorAll('.pdf_choc').forEach(el => {
            el.innerText = chocVal;
            if (chocVal.length > 60) el.style.fontSize = '7pt';
            else if (chocVal.length > 40) el.style.fontSize = '8pt';
            else if (chocVal.length > 25) el.style.fontSize = '9pt';
            else el.style.fontSize = '10pt';
        });
        setClassText('pdf_age', (document.getElementById('display_age') || {}).innerText || "");
        setClassText('pdf_mission', formatDateFR((document.getElementById('date_mission') || {}).value));
        const reformeBlock = template.querySelector('#pdf_reforme_block');
        const reformeConclusion = template.querySelector('#pdf_reforme_conclusion_block');
        const recapStandard = template.querySelector('#pdf_recap_standard');
        const detailsStandard = template.querySelector('#pdf_details_standard');
        const vvEcon = parseFloat((document.getElementById('val_venale') || {}).value) || 0;
        const veEcon = parseFloat((document.getElementById('val_epave') || {}).value) || 0;
        const vvTech = parseFloat((document.getElementById('val_venale_tech') || {}).value) || 0;
        const veTech = parseFloat((document.getElementById('val_epave_tech') || {}).value) || 0;
        const isReforme = (vvEcon > 0 || veEcon > 0 || vvTech > 0 || veTech > 0);
        if (reformeBlock) {
            const page1 = template.querySelector('#pdf_page_1');
            if (isReforme) {
                reformeBlock.style.display = 'block';
                const vAchat = parseFloat((document.getElementById('val_achat') || {}).value) || 0;
                const isTechLocal = (vvTech > 0 || veTech > 0);
                const isEconLocal = (vvEcon > 0 || veEcon > 0);
                setClassText('pdf_val_achat_econ', (isEconLocal && vAchat > 0) ? formatMoney(vAchat) + " DH" : "");
                setClassText('pdf_val_achat_tech', (isTechLocal && vAchat > 0) ? formatMoney(vAchat) + " DH" : "");
                setClassText('pdf_val_venale_econ', vvEcon > 0 ? formatMoney(vvEcon) + " DH" : "");
                setClassText('pdf_val_epave_econ', veEcon > 0 ? formatMoney(veEcon) + " DH" : "");
                setClassText('pdf_val_venale_tech', vvTech > 0 ? formatMoney(vvTech) + " DH" : "");
                setClassText('pdf_val_epave_tech', veTech > 0 ? formatMoney(veTech) + " DH" : "");
                setClassText('pdf_net_a_dire_econ', formatMoney(round2(vvEcon - veEcon)) + " DH");
                setClassText('pdf_net_a_dire_tech', formatMoney(round2(vvTech - veTech)) + " DH");
                if (reformeConclusion) reformeConclusion.style.display = 'block';
                if (recapStandard) recapStandard.style.display = 'none';
                if (detailsStandard) detailsStandard.style.display = 'none';
                const isTech = (vvTech > 0 || veTech > 0);
                const phraseBody = isTech ? "la remise en état de ce véhicule est TECHNIQUEMENT IMPOSSIBLE." : "la remise en état de ce véhicule est économiquement très onéreuse.";
                const typeFinal = isTech ? "REFORME TECHNIQUE" : "REFORME ÉCONOMIQUE";
                const mainTitle = isTech ? "VEHICULE GRAVEMENT ENDOMMAGE" : "VEHICULE GRAVEMENT ENDOMMAGE (VOIR DEVIS)";
                if (template.querySelector('#pdf_reforme_main_title')) template.querySelector('#pdf_reforme_main_title').innerText = mainTitle;
                if (template.querySelector('#pdf_reforme_phrase_body')) {
                    template.querySelector('#pdf_reforme_phrase_body').innerText = phraseBody;
                    template.querySelector('#pdf_reforme_phrase_body').style.fontWeight = isTech ? "800" : "600";
                }
                if (template.querySelector('#pdf_reforme_type_final')) template.querySelector('#pdf_reforme_type_final').innerText = typeFinal;
                const isContra = (typeExp === 'CONTRADICTOIRE');
                const pdfSpacers = page1.querySelectorAll('.pdf-spacer');
                if (isReforme || isContra) {
                    pdfSpacers.forEach(s => s.style.marginBottom = '6px');
                    const sigTable = template.querySelector('#pdf_signatures_table');
                    if (sigTable) sigTable.style.marginTop = '4px';
                    if (isReforme) {
                        page1.style.fontSize = "10.5pt";
                        const tables = page1.querySelectorAll('table');
                        tables.forEach((t, i) => {
                            if (i > 0) {
                                t.style.lineHeight = "1.3";
                                if (!t.closest('.pdf-spacer')) t.style.marginBottom = "8px";
                            }
                        });
                        const paragraphs = page1.querySelectorAll('p');
                        paragraphs.forEach(p => {
                            if (!p.closest('td') && !p.closest('.pdf-footer')) {
                                p.style.fontSize = "10.5pt";
                                p.style.marginBottom = "5px";
                            }
                        });
                    }
                } else {
                    pdfSpacers.forEach(s => s.style.marginBottom = '15px');
                    page1.style.fontSize = "";
                }
            } else {
                reformeBlock.style.display = 'none';
                if (reformeConclusion) reformeConclusion.style.display = 'none';
                if (recapStandard) recapStandard.style.display = 'block';
                if (detailsStandard) detailsStandard.style.display = 'block';
                if (page1) {
                    page1.style.fontSize = "";
                    page1.querySelectorAll('table').forEach(t => { t.style.lineHeight = ""; t.style.marginBottom = ""; });
                    page1.querySelectorAll('p').forEach(p => { p.style.fontSize = ""; p.style.marginBottom = ""; });
                }
            }
        }
        const obs = (document.getElementById('expert_obs') || {}).value || "R.A.S";
        setClassText('pdf_observations', obs);
        const pdfBody = template.querySelector('.pdf_table_body');
        if (pdfBody) {
            pdfBody.innerHTML = "";
            let tHT = 0, tTVA = 0, tVet = 0;
            const sums = {
                pieces: { ht: 0, vet: 0, tva: 0, ttc: 0 },
                tolerie: { ht: 0, vet: 0, tva: 0, ttc: 0 },
                peinture: { ht: 0, vet: 0, tva: 0, ttc: 0 },
                ingredients: { ht: 0, vet: 0, tva: 0, ttc: 0 },
                electricite: { ht: 0, vet: 0, tva: 0, ttc: 0 },
                mecanique: { ht: 0, vet: 0, tva: 0, ttc: 0 }
            };
            const tvaGarageEl = document.getElementById('garage_tva_applicable');
            const isTvaApplicable = tvaGarageEl ? (tvaGarageEl.value === 'OUI') : true;

            const groupData = { 
                'CARROSSERIE': { label: isEN ? 'BODYWORK' : 'CARROSSERIE', items: [] }, 
                'MÉCANIQUE (Pièce)': { label: isEN ? 'MECHANICS' : 'MÉCANIQUE (Pièce)', items: [] }, 
                'PIÈCES D\'USURE': { label: isEN ? "WEAR PARTS" : "PIÈCES D'USURE", items: [] },
                'FOURNITURE DE PEINTURE': { label: isEN ? "PAINT SUPPLIES" : "FOURNITURE DE PEINTURE", items: [] },
                'PLAQUE D\'IMMATRICULATION': { label: isEN ? "LICENSE PLATE" : "PLAQUE D'IMMATRICULATION", items: [] } 
            };
            const garageType = (document.getElementById('lieu_type') || {}).value || "NORMALE";
            parts.forEach((p, idx) => {
                const baseHT = round2(p.price * p.qty);
                const v = round2(baseHT * (p.rate / 100));
                const nht = round2(baseHT - v);

                const activeTva = isPartTVAEnabled(p, isTvaApplicable, garageType);
                let rowTVA = activeTva ? round2(nht * 0.2) : 0;
                const totalLigne = round2(nht + rowTVA);
                tHT += nht; tTVA += rowTVA; tVet += v;
                let target = null;
                if (p.type === 'M O TÔLERIE') target = sums.tolerie;
                else if (p.type === 'M O PEINTURE') target = sums.peinture;
                else if (p.type === 'M O ELECTRIQUE' || p.type === 'AUTO DIAGNOSTIQUE' || p.type === 'PROGRAMMATION D\'OPTIQUE AV/D' || p.type === 'PROGRAMMATION D\'OPTIQUE AV/G') target = sums.electricite;
                else if (p.type === 'M O MÉCANIQUE' || p.type === 'PARALLELISME / EQUILIBRAGE') target = sums.mecanique;
                else if (p.type === 'FOURNITURE DE PEINTURE') target = sums.ingredients;
                else target = sums.pieces;
                if (target) {
                    target.ht = round2(target.ht + baseHT); target.vet = round2(target.vet + v); target.tva = round2(target.tva + rowTVA); target.ttc = round2(target.ttc + totalLigne);
                }
                if (!laborCategories.includes(p.type) && groupData[p.type]) {
                    groupData[p.type].items.push({ p, baseHT, htNetVal: nht, tvaVal: rowTVA, ttcVal: totalLigne, vetVal: v });
                }
            });
            let totalQteDetail = 0, totalHTBrutDetail = 0, totalVetDHDetail = 0, totalHTNetDetail = 0, totalTVADetail = 0, totalNetTTCDetail = 0;
            for (const [key, group] of Object.entries(groupData)) {
                if (group.items.length === 0) continue;
                pdfBody.insertAdjacentHTML('beforeend', `<tr style="background-color: #f1f5f9; border-bottom: 1px solid #cbd5e1;"><td colspan="10" style="padding: 2.5px 8px; font-weight: 600; color: #1e3a8a; font-size: 7.5pt; text-transform: uppercase;">${group.label}</td></tr>`);
                group.items.forEach(item => {
                    const p = item.p; totalQteDetail += p.qty; totalHTBrutDetail += item.baseHT; totalVetDHDetail += item.vetVal; totalHTNetDetail += item.htNetVal; totalTVADetail += item.tvaVal; totalNetTTCDetail += item.ttcVal;
                    let sourceShort = ""; const sLower = (p.source || "").toLowerCase();
                    if (sLower.includes("origine")) sourceShort = isEN ? "OEM" : "ORIG."; 
                    else if (sLower.includes("adaptable")) sourceShort = isEN ? "AFTERM." : "ADAPT."; 
                    else if (sLower.includes("récup") || sLower.includes("recup")) sourceShort = isEN ? "SALV." : "RÉCUP."; 
                    else if (sLower.includes("occasion")) sourceShort = isEN ? "USED" : "OCCAS."; 
                    else sourceShort = (p.source || "").toUpperCase();
                    let sourceColor = "#64748b"; if (sLower.includes("origine")) sourceColor = "#059669"; else if (sLower.includes("adaptable")) sourceColor = "#ef4444"; else if (sLower.includes("récup") || sLower.includes("recup")) sourceColor = "#2563eb"; else if (sLower.includes("occasion")) sourceColor = "#9333ea";
                    let nameFormatted = (p.name || "").toLowerCase();
                    if (isEN) {
                        nameFormatted = translatePartName(p.name);
                    } else {
                        nameFormatted = nameFormatted.charAt(0).toUpperCase() + nameFormatted.slice(1);
                    }
                    pdfBody.insertAdjacentHTML('beforeend', `<tr><td style="padding: 1.5px 8px; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.5pt; white-space: nowrap;">${nameFormatted}</td><td style="padding: 1.5px 2px; text-align:center; vertical-align: middle; color:${sourceColor}; font-weight: 700; font-size: 7pt;">${sourceShort}</td><td style="padding: 1.5px 2px; text-align:center; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.5pt;">${p.qty}</td><td style="padding: 1.5px 4px; text-align:right; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.2pt; font-family: monospace;">${formatMoney(p.price)}</td><td style="padding: 1.5px 4px; text-align:right; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.5pt; font-family: monospace;">${formatMoney(item.baseHT)}</td><td style="padding: 1.5px 2px; text-align:center; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.5pt;">${p.rate}%</td><td style="padding: 1.5px 4px; text-align:right; vertical-align: middle; color: #dc2626; font-weight: 500; font-size: 7.2pt; font-family: monospace;">-${formatMoney(item.vetVal)}</td><td style="padding: 1.5px 4px; text-align:right; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.5pt; font-family: monospace;">${formatMoney(item.htNetVal)}</td><td style="padding: 1.5px 4px; text-align:right; vertical-align: middle; color: #1e293b; font-weight: 500; font-size: 7.5pt; font-family: monospace;">${formatMoney(item.tvaVal)}</td><td style="padding: 1.5px 8px; text-align:right; vertical-align: middle; font-weight: 600; color: #1e293b; font-size: 8pt; font-family: monospace;">${formatMoney(item.ttcVal)}</td></tr>`);
                });
            }
            const pdfFoot = template.querySelector('.pdf_table_foot');
            const totauxLabel = isEN ? "TOTAL EVALUATION:" : "TOTAUX ÉVALUATION :";
            if (pdfFoot) pdfFoot.innerHTML = `<tr><td colspan="2" style="padding: 4px 8px; text-align:right; font-weight: 800; color: #1e3a8a; font-size: 11.5pt; text-transform: uppercase;">${totauxLabel}</td><td style="padding: 4px 2px; text-align:center; font-weight: 800; color: #1e293b; font-size: 11.5pt;">${totalQteDetail}</td><td></td><td style="padding: 4px 4px; text-align:right; font-weight: 800; color: #1e293b; font-size: 11.5pt; font-family: monospace;">${formatMoney(totalHTBrutDetail)}</td><td></td><td style="padding: 4px 4px; text-align:right; font-weight: 800; color: #dc2626; font-size: 11.5pt; font-family: monospace;">-${formatMoney(totalVetDHDetail)}</td><td style="padding: 4px 4px; text-align:right; font-weight: 800; color: #1e293b; font-size: 11.5pt; font-family: monospace;">${formatMoney(totalHTNetDetail)}</td><td style="padding: 4px 4px; text-align:right; font-weight: 800; color: #1e293b; font-size: 11.5pt; font-family: monospace;">${formatMoney(totalTVADetail)}</td><td style="padding: 4px 8px; text-align:right; font-weight: 800; color: #1e3a8a; font-size: 12pt; font-family: monospace;">${formatMoney(totalNetTTCDetail)}</td></tr>`;
            const toggleRecapRow = (id, data, cls) => {
                const row = template.querySelector('#' + id);
                if (row) {
                    if (data.ttc > 0.1) {
                        row.style.setProperty('display', 'table-row', 'important');
                        if (row.querySelector('.' + cls + '_ht')) row.querySelector('.' + cls + '_ht').innerText = formatMoney(data.ht);
                        if (row.querySelector('.' + cls + '_vet')) row.querySelector('.' + cls + '_vet').innerText = "-" + formatMoney(data.vet);
                        if (row.querySelector('.' + cls + '_tva')) row.querySelector('.' + cls + '_tva').innerText = formatMoney(data.tva);
                        if (row.querySelector('.' + cls + '_ttc')) row.querySelector('.' + cls + '_ttc').innerText = formatMoney(data.ttc);
                    } else row.style.display = 'none';
                }
            };
            toggleRecapRow('row_pieces', sums.pieces, 'pdf_sum_pieces'); toggleRecapRow('row_tolerie', sums.tolerie, 'pdf_sum_tolerie'); toggleRecapRow('row_peinture', sums.peinture, 'pdf_sum_peinture'); toggleRecapRow('row_ingredients', sums.ingredients, 'pdf_sum_ingredients'); toggleRecapRow('row_electricite', sums.electricite, 'pdf_sum_electricite'); toggleRecapRow('row_mecanique', sums.mecanique, 'pdf_sum_mecanique');
            let totRecapHT = 0, totRecapVet = 0, totRecapTVA = 0, totRecapTTC = 0; Object.values(sums).forEach(s => { totRecapHT += s.ht; totRecapVet += s.vet; totRecapTVA += s.tva; totRecapTTC += s.ttc; });
            if (template.querySelector('#pdf_total_recap_ht')) template.querySelector('#pdf_total_recap_ht').innerText = formatMoney(totRecapHT);
            if (template.querySelector('#pdf_total_recap_vet')) template.querySelector('#pdf_total_recap_vet').innerText = "-" + formatMoney(totRecapVet);
            if (template.querySelector('#pdf_total_recap_tva')) template.querySelector('#pdf_total_recap_tva').innerText = formatMoney(totRecapTVA);
            if (template.querySelector('#pdf_total_recap_ttc')) template.querySelector('#pdf_total_recap_ttc').innerText = formatMoney(totRecapTTC);
            
            // Mettre à jour dynamiquement l'en-tête de la colonne TVA dans le récapitulatif
            template.querySelectorAll('.pdf_recap_tva_header').forEach(el => {
                el.innerText = isTvaApplicable ? (isEN ? "VAT (20%)" : "TVA (20%)") : (isEN ? "VAT (0%)" : "TVA (0%)");
            });

            const fPct = parseFloat((document.getElementById('franchise_pct') || {}).value) || 0; const fMin = parseFloat((document.getElementById('franchise_min') || {}).value) || 0; const totalNetTTCExpertise = round2(tHT + tTVA);
            let mFranchise = 0; if (totalNetTTCExpertise > 0 && (fPct > 0 || fMin > 0)) { mFranchise = round2(Math.max((totalNetTTCExpertise * fPct / 100), fMin)); if (mFranchise > totalNetTTCExpertise) mFranchise = totalNetTTCExpertise; }
            const netGeneral = Math.max(0, round2(totalNetTTCExpertise - mFranchise));
            const recapFranchiseRow = template.querySelector('#pdf_row_recap_franchise');
            if (recapFranchiseRow) {
                if (mFranchise > 0) {
                    recapFranchiseRow.style.setProperty('display', 'table-row', 'important'); 
                    if (recapFranchiseRow.querySelector('td')) {
                        recapFranchiseRow.querySelector('td').innerText = isEN ? "DEDUCTIBLE DEDUCTION" : "DÉDUCTION FRANCHISE";
                    }
                    if (template.querySelector('#pdf_recap_franchise_val')) template.querySelector('#pdf_recap_franchise_val').innerText = "-" + formatMoney(mFranchise) + " DH";
                } else recapFranchiseRow.style.display = 'none';
            }
            
            // Mettre à jour l'affichage de la ligne de Total Net après franchise
            const recapNetRow = template.querySelector('#pdf_row_recap_net');
            if (recapNetRow) {
                if (mFranchise > 0) {
                    recapNetRow.style.setProperty('display', 'table-row', 'important');
                    if (recapNetRow.querySelector('td')) {
                        recapNetRow.querySelector('td').innerText = isEN ? "NET COMPANY PAYABLE" : "NET À PAYER COMPAGNIE";
                    }
                    if (template.querySelector('#pdf_recap_net_val')) template.querySelector('#pdf_recap_net_val').innerText = formatMoney(netGeneral) + " DH";
                } else {
                    recapNetRow.style.display = 'none';
                }
            }
            const mentionLettres = isEN ? numberToEnglish(netGeneral).toUpperCase() : numberToFrench(netGeneral).toUpperCase(); 
            setClassText('pdf_montant_lettres', mentionLettres);
            if (document.getElementById('franchise_display')) document.getElementById('franchise_display').innerText = formatMoney(mFranchise) + " DH";
            const pjBlock = template.querySelector('#pdf_pieces_jointes_block'); const pjList = template.querySelector('#pdf_pieces_jointes_list');
            if (pjBlock && pjList) {
                pjList.innerHTML = ''; const checkboxes = document.querySelectorAll('input[name="pj_checkbox"]:checked');
                if (checkboxes.length > 0) {
                    checkboxes.forEach(cb => { 
                        let val = cb.value; 
                        if (isEN) {
                            const pjMap = {
                                "Carte Grise": "Registration Certificate (Carte Grise)",
                                "Photos du véhicule": "Vehicle Photos",
                                "Copie Permis": "Driving License Copy",
                                "Déclaration de Sinistre": "Claim Declaration",
                                "Offre d'épave": "Salvage Offer"
                            };
                            val = pjMap[val] || val;
                        }
                        if (cb.id === 'pj_offre_epave') { 
                            const cie = (document.getElementById('cie_assurance') || {}).value || ''; 
                            val += " " + cie; 
                        } 
                        pjList.innerHTML += `<li><i class="fa-solid fa-caret-right mr-2"></i> ${val}</li>`; 
                    });
                    pjBlock.style.display = 'block';
                } else pjBlock.style.display = 'none';
            }
            
            // Map Modèle B summary values
            setClassText('pdf_fournitures_ht', formatMoney(sums.pieces.ht));
            setClassText('pdf_mdo_ht', formatMoney(sums.tolerie.ht + sums.mecanique.ht + sums.electricite.ht));
            setClassText('pdf_peinture_ht', formatMoney(sums.peinture.ht + sums.ingredients.ht));
            setClassText('pdf_total_ht', formatMoney(totRecapHT));
            setClassText('pdf_tva', formatMoney(totRecapTVA));
            setClassText('pdf_total_ttc_dommages', formatMoney(totRecapTTC));
            setClassText('pdf_vetuste_appliquee', formatMoney(totRecapVet));
            setClassText('pdf_franchise_appliquee', formatMoney(mFranchise) + " DH");
            setClassText('pdf_total_net', formatMoney(netGeneral) + " DH");
            setClassText('pdf_du_compagnie', formatMoney(netGeneral) + " DH");
            setClassText('pdf_du_assure', formatMoney(mFranchise) + " DH");

            // Coloration des étiquettes de choc du Modèle B
            if (modelId === 'pdf-template-source-b') {
                const zoneLabels = {
                    'AV. GAUCHE': 'b_choc_AVG',
                    'AV. DROITE': 'b_choc_AVD',
                    'AVANT': 'b_choc_AV',
                    'ARRIERE': 'b_choc_AR',
                    'LATERAL GAUCHE': 'b_choc_LATG',
                    'LATERAL DROIT': 'b_choc_LATD',
                    'AR. GAUCHE': 'b_choc_ARG',
                    'AR. DROITE': 'b_choc_ARD'
                };
                
                Object.values(zoneLabels).forEach(id => {
                    const el = template.querySelector('#' + id);
                    if (el) {
                        el.style.background = 'white';
                        el.style.color = '#1e293b';
                        el.style.borderColor = '#1e293b';
                    }
                });
                
                if (selectedChocs.includes('360 / GLOBAL')) {
                    Object.values(zoneLabels).forEach(id => {
                        const el = template.querySelector('#' + id);
                        if (el) {
                            el.style.background = '#3b82f6';
                            el.style.color = 'white';
                            el.style.borderColor = '#3b82f6';
                        }
                    });
                } else {
                    selectedChocs.forEach(zone => {
                        const id = zoneLabels[zone];
                        if (id) {
                            const el = template.querySelector('#' + id);
                            if (el) {
                                el.style.background = '#ef4444';
                                el.style.color = 'white';
                                el.style.borderColor = '#ef4444';
                            }
                        }
                    });
                }
            }
            if (typeof translateDOMText === 'function') {
                translateDOMText(template);
            }
        }
    });

}


function numberToFrench(number) {
    number = Math.floor(number);
    if (number === 0) return "zéro";
    const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    const teens = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
    const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    function convert(n) {
        if (n < 10) return units[n];
        if (n >= 10 && n <= 16) return teens[n - 10];
        if (n < 20) return "dix-" + units[n - 10];
        if (n < 70) {
            let t = Math.floor(n / 10);
            let u = n % 10;
            if (u === 1) return tens[t] + "-et-un";
            return tens[t] + (u > 0 ? "-" + units[u] : "");
        }
        if (n < 80) return "soixante-" + convert(n - 60 === 1 ? 11 : n - 60);
        if (n < 90) {
            let u = n % 10;
            return "quatre-vingt" + (u > 0 ? "-" + units[u] : "");
        }
        if (n < 100) return "quatre-vingt-" + convert(n - 80);
        if (n < 1000) {
            let c = Math.floor(n / 100);
            let r = n % 100;
            let s = (c === 1 ? "cent" : units[c] + " cents");
            if (r === 0) return s;
            return (c === 1 ? "cent" : units[c] + " cent") + "-" + convert(r);
        }
        if (n < 1000000) {
            let m = Math.floor(n / 1000);
            let r = n % 1000;
            let s = (m === 1 ? "mille" : convert(m) + " mille");
            if (r === 0) return s;
            return s + "-" + convert(r);
        }
        return String(n);
    }
    return convert(number) + " dirhams";
}

function generatePDFFromPreview() {
    exportToPDF();
}

function printReport() {
    const modelInput = document.querySelector('input[name="pdf_model"]:checked');
    const model = modelInput ? modelInput.value : 'A';
    const sourceId = (model === 'B') ? 'pdf-template-source-b' : 'pdf-template-source';
    const source = document.getElementById(sourceId);
    const win = window.open('', '_blank');
    win.document.write('<html><head><title>Impression Rapport</title>');
    win.document.write('<link rel="stylesheet" href="styles.css?v=' + Date.now() + '">'); // Ajout CSS garanti sans cache
    win.document.write('<style>body{padding:0;margin:0;} .pdf-page { page-break-after: always; }</style>');
    win.document.write('</head><body>');
    win.document.write(source.outerHTML);
    win.document.write('</body></html>');
    win.document.close();
    win.setTimeout(() => {
        win.print();
        win.close();
    }, 500);
}

function exportToPDF() {
    updatePDFData();
    
    const modelInput = document.querySelector('input[name="pdf_model"]:checked');
    const model = modelInput ? modelInput.value : 'A';
    const sourceId = (model === 'B') ? 'pdf-template-source-b' : 'pdf-template-source';
    const source = document.getElementById(sourceId);
    
    if (!source) {
        console.warn("Template source introuvable");
        showToast("Erreur: Template introuvable", "error");
        return;
    }
    
    // Ouvrir une nouvelle fenêtre avec le contenu du rapport
    const win = window.open('', '_blank');
    if (!win) {
        showToast("Veuillez autoriser les pop-ups pour télécharger le PDF", "error");
        return;
    }
    
    const ref = document.getElementById('ref_dossier').value || "expertise";
    const immat = (document.getElementById('ref_immat').value || "").replace(/\s+/g, '_');
    
    win.document.write('<!DOCTYPE html><html><head>');
    win.document.write('<title>RAPPORT_' + ref + '_' + immat + '</title>');
    win.document.write('<link rel="stylesheet" href="styles.css?v=' + Date.now() + '">');
    win.document.write('<style>body{padding:0;margin:0;} .pdf-page { page-break-after: always; }</style>');
    win.document.write('</head><body>');
    win.document.write(source.outerHTML);
    win.document.write('</body></html>');
    win.document.close();
    
    // Attendre que les images et le DOM soient chargés, puis lancer l'impression
    win.onload = function() {
        setTimeout(function() {
            win.print();
            // Ne pas fermer immédiatement pour laisser le temps de sauvegarder
        }, 300);
    };
    
    showToast("Le rapport s'ouvre dans un nouvel onglet. Utilisez 'Enregistrer en PDF' dans la boîte de dialogue.", "info");
}

function openPreview() {
    console.log("Tentative d'ouverture de l'aperçu...");
    try {
        updatePDFData();

        const modelInput = document.querySelector('input[name="pdf_model"]:checked');
        const model = modelInput ? modelInput.value : 'A';
        const sourceId = (model === 'B') ? 'pdf-template-source-b' : 'pdf-template-source';
        const source = document.getElementById(sourceId);
        const paper = document.getElementById('preview-paper');
        const modal = document.getElementById('preview-modal');

        if (!source || !paper || !modal) {
            console.warn("Éléments critiques manquants pour l'aperçu:", { source: !!source, paper: !!paper, modal: !!modal });
            showToast("Erreur: Impossible d'ouvrir l'aperçu", "error");
            return;
        }

        // On clone le contenu pour éviter de déplacer l'élément source original
        paper.innerHTML = source.innerHTML;

        // On s'assure que le papier n'hérite pas de styles de masquage
        paper.style.display = 'block';
        paper.style.visibility = 'visible';
        paper.style.position = 'relative';
        paper.style.left = '0';
        paper.style.margin = '20px auto';

        modal.style.display = 'flex';
        console.log("Aperçu ouvert pour le Modèle:", model);
    } catch (err) {
        console.warn("Crash dans openPreview:", err);
        showToast("Erreur lors de l'ouverture de l'aperçu", "error");
    }
}

function closePreview() {
    document.getElementById('preview-modal').style.display = 'none';
}

// --- GESTION DU WIZARD ---
let currentStep = 1;
let maxStepReached = 1;

function goToStep(step) {
    if (step < 1 || step > 4) return;
    if (step > maxStepReached && step > currentStep + 1) return;
    document.querySelectorAll('.wizard-step').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById('step_' + step);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('animate-fade-in');
    }
    updateStepTheme(step);
    for (let i = 1; i <= 4; i++) {
        const card = document.getElementById('menu_step_' + i);
        const iconDiv = document.getElementById('icon_step_' + i);
        if (!card) continue;

        card.classList.remove('step-card-active', 'step-card-done', 'step-card-locked');
        
        if (i < step) {
            card.classList.add('step-card-done');
            if (iconDiv) iconDiv.innerHTML = '<i class="fa-solid fa-circle-check text-[10px]"></i>';
        } else if (i === step) {
            card.classList.add('step-card-active');
            if (iconDiv) iconDiv.innerHTML = '<i class="fa-solid fa-circle-check text-[10px]"></i>';
        } else {
            card.classList.add('step-card-locked');
            if (iconDiv) iconDiv.innerHTML = '<i class="fa-solid fa-lock text-[10px]"></i>';
        }
    }
    currentStep = step;
    if (step > maxStepReached) maxStepReached = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    saveDataDebounced();
}

function updateStepTheme(step) {
    const themes = [
        { border: 'border-blue-600', text: 'text-blue-500', btn: 'bg-blue-600', hover: 'hover:bg-blue-700' },
        { border: 'border-emerald-600', text: 'text-emerald-600', btn: 'bg-emerald-600', hover: 'hover:bg-emerald-700' },
        { border: 'border-indigo-600', text: 'text-indigo-600', btn: 'bg-indigo-600', hover: 'hover:bg-indigo-700' },
        { border: 'border-purple-600', text: 'text-purple-600', btn: 'bg-purple-600', hover: 'hover:bg-purple-700' }
    ];

    const theme = themes[step - 1];

    // Changer la couleur du bouton Suivant
    const nextBtn = document.getElementById('global_next_btn');
    if (nextBtn) {
        nextBtn.className = nextBtn.className.replace(/bg-\w+-\d+/g, theme.btn).replace(/hover:bg-\w+-\d+/g, theme.hover);
    }

    // Changer la bordure du panel actif
    const currentPanel = document.querySelector(`#step_${step} .glass-panel`);
    if (currentPanel) {
        currentPanel.className = currentPanel.className.replace(/border-\w+-\d+/g, theme.border);
    }

    // Changer la couleur du texte/icône du titre
    const titleIcon = document.querySelector(`#step_${step} h3 i`);
    if (titleIcon) {
        titleIcon.className = titleIcon.className.replace(/text-\w+-\d+/g, theme.text);
    }
}

function handleGlobalNext() {
    validateStep(currentStep);
}

function validateStep(step) {
    let isValid = true;
    let required = [];

    if (step === 1) {
        required = ['ref_dossier', 'requerant_name', 'cie_assurance'];
    } else if (step === 2) {
        required = ['ref_immat', 'veh_make', 'veh_chassis', 'date_mec'];
    } else if (step === 3) {
        required = ['date_sinistre', 'date_visite', 'expert_1_name'];
    }

    if (required.length > 0) {
        required.forEach(id => {
            const el = document.getElementById(id);
            if (el && !el.value) {
                el.classList.add('animate-shake', 'border-red-500', 'bg-red-50');
                setTimeout(() => el.classList.remove('animate-shake'), 500);
                isValid = false;
            } else if (el) {
                el.classList.remove('border-red-500', 'bg-red-50');
            }
        });
    }

    if (isValid) {
        if (step < 4) {
            goToStep(step + 1);
        } else {
            // Si on est é  l'étape 4, on peut éventuellement rafraîchir le PDF ou autre
            updatePDFData();
            showToast("Toutes les étapes sont complétées", "info");
        }
    } else {
        showToast("Veuillez remplir les champs obligatoires", "error");
    }
}

function calculImmo() {
    const dateEntree = document.getElementById('date_entree_garage').value;
    const dateExpertise = document.getElementById('date_visite').value;
    const dateFacture = document.getElementById('date_fin_travaux').value;
    const joursGara = parseInt(document.getElementById('jours_rep_garagiste').value) || 0;
    const resEl = document.getElementById('calc_immo_result');
    if (!resEl) return;
    if (!dateEntree || !dateExpertise || !dateFacture) {
        resEl.innerHTML = '<span class="text-slate-400 italic">Dates incomplètes</span>';
        return;
    }
    const d1 = new Date(dateEntree);
    const d2 = new Date(dateExpertise);
    const d3 = new Date(dateFacture);
    const diff1 = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    const diff2 = Math.ceil((d3 - d2) / (1000 * 60 * 60 * 24)) - joursGara;
    const total = Math.max(0, diff1) + Math.max(0, diff2);
    resEl.innerHTML = `Délai Calculé : <strong class="text-blue-700">${total} Jours</strong> <span class="text-[10px] block opacity-70">(Avant expertise: ${diff1}j + Après: ${diff2}j)</span>`;
    updatePDFData();
}

function resetFormPart() {
    const part_name = document.getElementById('part_name');
    if (part_name) part_name.value = "";
    const part_name_manual = document.getElementById('part_name_manual');
    if (part_name_manual) {
        part_name_manual.value = "";
        part_name_manual.classList.add("hidden");
    }
    const part_price = document.getElementById('part_price');
    if (part_price) part_price.value = "";
    const part_qty = document.getElementById('part_qty');
    if (part_qty) part_qty.value = "1";
    const manual_rate = document.getElementById('manual_rate');
    const default_rate = document.getElementById('default_rate');
    if (manual_rate) manual_rate.value = (default_rate || { value: 0 }).value;
    if (part_name) part_name.focus();
}

// Fonction pour formater l'immatriculation (ajouter les 0 manquants au matricule arabe)
function padImmatString(val) {
    if (!val) return val;
    // Format Arabe standard: (1 à 5 chiffres) - (Lettre Arabe/Lettre) - (1 à 2 chiffres)
    const match = val.match(/^(\d{1,5})-?([A-Za-z\u0600-\u06FF])-?(\d{1,2})$/);
    if (match) {
        const p1 = match[1].padStart(5, '0');
        const p2 = match[2];
        const p3 = match[3].padStart(2, '0');
        return `${p1}-${p2}-${p3}`;
    }
    return val;
}

function updateCieAssurance() {
    const refEl = document.getElementById('ref_dossier');
    if (!refEl) return;
    let ref = refEl.value.toUpperCase();
    const cieSelect = document.getElementById('cie_assurance');
    if (!cieSelect) return;

    // --- AUTO-CORRECTION DANS LE CHAMP RÉFÉRENCE ---
    const originalRef = ref;
    
    // 1. Ajouter automatiquement un espace entre un chiffre et une lettre (ex: 123AW -> 123 AW)
    ref = ref.replace(/(\d)([A-Z])/g, '$1 $2');
    ref = ref.replace(/([A-Z])(\d)/g, '$1 $2');

    // 2. Correction des fautes de frappe sur les sigles
    const correctTypo = (typo, correct) => {
        const regex = new RegExp(`(^|[^A-Z])${typo}([^A-Z]|$)`, 'g');
        ref = ref.replace(regex, `$1${correct}$2`);
    };

    // Corrections demandées
    correctTypo('ECC', 'EC-C');
    correctTypo('ECCAT', 'EC-CAT');
    correctTypo('ECATS', 'EC-ATS');
    correctTypo('ATTS', 'ATS');
    correctTypo('CAAT', 'CAT');

    if (ref !== originalRef) {
        // Sauvegarder la position du curseur
        const start = refEl.selectionStart;
        const end = refEl.selectionEnd;
        refEl.value = ref; // Appliquer la correction visuellement
        // Tenter de replacer le curseur (décalé du nombre de caractères ajoutés)
        const diff = ref.length - originalRef.length;
        try { refEl.setSelectionRange(start + diff, end + diff); } catch(e){}
    }
    // ------------------------------------------------

    // Fonction de détection tolérante aux fautes (Regex)
    // Permet de détecter les fautes courantes tout en isolant l'acronyme.
    const matchPattern = (pattern) => {
        const regex = new RegExp(`(^|[^A-Z])(${pattern})([^A-Z]|$)`);
        return regex.test(ref);
    };

    if (ref.startsWith('AXA/')) { cieSelect.value = "AXA ASSURANCE MAROC"; }
    else if (ref.startsWith('SAHAM/') || ref.startsWith('SANAM/')) { cieSelect.value = "SANLAM MAROC"; }
    else if (ref.startsWith('RMA/')) { cieSelect.value = "RMA"; }
    else if (ref.startsWith('MATU/') || ref.startsWith('MAMDA/')) { cieSelect.value = "MAMDA-MCMA"; }
    else if (ref.startsWith('CAT/') && !matchPattern('EC\\-?CA+T')) { cieSelect.value = "CAT (CONTRADICTOIRE)"; }
    else if (ref.startsWith('ATL/')) { cieSelect.value = "ATLANTA SANAD"; }
    else if (ref.startsWith('WAFA/')) { cieSelect.value = "WAFA ASSURANCE"; }
    
    // Nouveaux codes avec tolérance aux erreurs de frappe
    else if (matchPattern('EC\\-?CA+T')) { cieSelect.value = "CAT"; } // EC-CAT, ECCAT, EC-CAAT...
    else if (matchPattern('EC\\-?AT+S')) { cieSelect.value = "ATLANTASANAD"; } // EC-ATS, ECATS, EC-ATTS...
    else if (matchPattern('EC\\-?C+')) { cieSelect.value = "SANLAM"; } // EC-C, ECC, EC-CC...
    else if (matchPattern('AT+S')) { cieSelect.value = "ATLANTASANAD"; } // ATS, ATTS, ATTTS...
    else if (matchPattern('CA+T')) { cieSelect.value = "CAT"; } // CAT, CAAT, CAAAT...
    else if (matchPattern('AW|WA|WAF')) { cieSelect.value = "WAFA ASSURANCE"; } // AW, WA, WAF...
    else if (matchPattern('AC+|CA')) { cieSelect.value = "SANLAM"; } // AC, ACC, CA...

    updateAgentList();
    saveDataDebounced();
}

const AGENTS_DB = {
    "AXA ASSURANCE MAROC": ["AXA ASSISTANCE", "AXA DIRECT", "AGENCE CENTRALE", "AUTRES AGENTS AXA..."],
    "SANLAM MAROC": ["SANLAM ASSISTANCE", "AGENCE NOUR", "AGENCE EL BARAKA", "AUTRES AGENTS SANLAM..."],
    "RMA": ["RMA ASSISTANCE", "AGENCE ROYALE", "AGENCE ATLAS", "AUTRES AGENTS RMA..."],
    "MAMDA-MCMA": ["SIEGE SOCIAL", "AGENCE REGIONALE", "MUTUELLE AGRICOLE"],
    "ATLANTASANAD": ["AGENCE ATLANTIS", "SANAD ASSURANCE"],
    "WAFA ASSURANCE": ["WAFA CASH", "BOULEVARD MOHAMMED V", "AUTRES..."]
};

function updateAgentList() {
    const cieEl = document.getElementById('cie_assurance');
    if (!cieEl) return;
    const cie = cieEl.value;
    const datalist = document.getElementById('intermediaire_list');
    if (!datalist) return;
    datalist.innerHTML = "";
    if (AGENTS_DB[cie]) {
        AGENTS_DB[cie].forEach(a => datalist.innerHTML += `<option value="${a}">`);
    }
}

function updateDesignations() {
    const typeInput = document.getElementById("part_type");
    const partNameSelect = document.getElementById("part_name");
    if (!typeInput || !partNameSelect) return;
    const type = typeInput.value;
    
    partNameSelect.innerHTML = '<option value="">-- Choisir une désignation --</option>';
    
    if (PARTS_DB[type]) {
        const items = [...PARTS_DB[type]].sort((a, b) => a.localeCompare(b));
        items.forEach(item => {
            const opt = document.createElement("option");
            opt.value = item;
            opt.textContent = item;
            partNameSelect.appendChild(opt);
        });
    }
    
    const optOther = document.createElement("option");
    optOther.value = "AUTRE";
    optOther.textContent = "AUTRE (SAISIE MANUELLE)...";
    partNameSelect.appendChild(optOther);
    
    handleDesignationChange();
}

function handleDesignationChange() {
    const partNameSelect = document.getElementById("part_name");
    const partNameManual = document.getElementById("part_name_manual");
    if (!partNameSelect || !partNameManual) return;
    
    if (partNameSelect.value === 'AUTRE') {
        partNameManual.classList.remove("hidden");
    } else {
        partNameManual.classList.add("hidden");
        partNameManual.value = "";
    }
    
    saveDataDebounced();
}

function toggleEnCoursValidation() {
    const en_cours_rep_status = document.getElementById('en_cours_rep_status');
    if (!en_cours_rep_status) return;
    const status = en_cours_rep_status.value;
    const date_en_cours_rep = document.getElementById('date_en_cours_rep');
    if (date_en_cours_rep) date_en_cours_rep.disabled = (status === 'NON');
}

function toggleFinTravauxValidation() {
    const fin_travaux_status = document.getElementById('fin_travaux_status');
    if (!fin_travaux_status) return;
    const status = fin_travaux_status.value;
    const date_fin_travaux = document.getElementById('date_fin_travaux');
    if (date_fin_travaux) date_fin_travaux.disabled = (status === 'NON');
}

function syncDatesVisite() {
    const date_visite = document.getElementById('date_visite');
    if (!date_visite) return;
    const v = date_visite.value;
    const date_visite_copy = document.getElementById('date_visite_copy');
    if (date_visite_copy) date_visite_copy.value = v;
    updatePDFData();
}

function updateDefaultRates() {
    const default_rate = document.getElementById('default_rate');
    if (!default_rate) return;
    const val = default_rate.value;
    const manual_rate = document.getElementById('manual_rate');
    if (manual_rate) manual_rate.value = val;
}

// --- MOTEUR DE CALCUL VRADE (DÉPRÉCIATION) ---
if (typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
}

const MATRICE = [
    { cat: "PP/Non Utilitaire", pMin: 0, pMax: 7, carb: "Diesel", ans: [0.20, 0.15, 0.10, 0.10, 0.10] },
    { cat: "PP/Non Utilitaire", pMin: 0, pMax: 7, carb: "Essence", ans: [0.20, 0.15, 0.10, 0.10, 0.10] },
    { cat: "PP/Non Utilitaire", pMin: 8, pMax: 11, carb: "Diesel", ans: [0.25, 0.20, 0.15, 0.10, 0.10] },
    { cat: "PP/Non Utilitaire", pMin: 8, pMax: 11, carb: "Essence", ans: [0.25, 0.20, 0.15, 0.10, 0.10] },
    { cat: "PP/Non Utilitaire", pMin: 12, pMax: 999, carb: "Diesel", ans: [0.27, 0.20, 0.15, 0.10, 0.10] },
    { cat: "PP/Non Utilitaire", pMin: 12, pMax: 999, carb: "Essence", ans: [0.30, 0.25, 0.20, 0.10, 0.10] },
    { cat: "Location/Utilitaire", pMin: 0, pMax: 7, carb: "Diesel", ans: [0.25, 0.20, 0.15, 0.10, 0.10] },
    { cat: "Location/Utilitaire", pMin: 0, pMax: 7, carb: "Essence", ans: [0.25, 0.20, 0.15, 0.10, 0.10] },
    { cat: "Location/Utilitaire", pMin: 8, pMax: 11, carb: "Diesel", ans: [0.30, 0.25, 0.20, 0.15, 0.10] },
    { cat: "Location/Utilitaire", pMin: 8, pMax: 11, carb: "Essence", ans: [0.30, 0.25, 0.20, 0.15, 0.10] },
    { cat: "Location/Utilitaire", pMin: 12, pMax: 999, carb: "Diesel", ans: [0.32, 0.25, 0.20, 0.15, 0.10] },
    { cat: "Location/Utilitaire", pMin: 12, pMax: 999, carb: "Essence", ans: [0.32, 0.25, 0.20, 0.15, 0.10] },
    { cat: "Bus et Camions", pMin: 0, pMax: 999, carb: "Diesel", ans: [0.35, 0.30, 0.25, 0.20, 0.15] },
    { cat: "Bus et Camions", pMin: 0, pMax: 999, carb: "Essence", ans: [0.40, 0.35, 0.30, 0.25, 0.20] },
    { cat: "Semi-Remorque", pMin: 0, pMax: 999, carb: "Diesel", ans: [0.35, 0.30, 0.25, 0.20, 0.15] },
    { cat: "Semi-Remorque", pMin: 0, pMax: 999, carb: "Essence", ans: [0.40, 0.35, 0.30, 0.25, 0.20] },
    { cat: "Motocycle", pMin: 0, pMax: 999, carb: "Essence", ans: [0.20, 0.15, 0.10, 0.10, 0.10] },
    { cat: "Engins/Agricole", pMin: 0, pMax: 999, carb: "Diesel", ans: [0, 0, 0, 0, 0] },
    { cat: "Engins/Agricole", pMin: 0, pMax: 999, carb: "Essence", ans: [0, 0, 0, 0, 0] }
];

let chartEvo, chartDist;
let tableDataForPDF = [];
let finalCalculation = {};

function formatFinance(num, withSuffix = true) {
    if (num === null || isNaN(num)) return "--";
    let res = num.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return withSuffix ? res + " Dhs" : res;
}

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function getTaux(annee, cat, p, carb) {
    if (cat === "Engins/Agricole") return 0;
    if (annee >= 11) return 0.05;
    let line = MATRICE.find(l => l.cat === cat && p >= l.pMin && p <= l.pMax && l.carb === carb);
    if (!line) { line = MATRICE.find(l => l.cat === cat && p >= l.pMin && p <= l.pMax); }
    return line ? line.ans[Math.min(annee - 1, 4)] : 0.10;
}

function getReferenceKmPerYear(cat, carb) {
    if (cat === "Motocycle") return 5000;
    if (cat === "Engins/Agricole") return 1500;
    if (cat === "Bus et Camions" || cat === "Semi-Remorque") return 50000;
    if (carb === "Diesel") return 25000;
    return 20000;
}

function updateVrade() {
    try {
        const elValDisplay = document.getElementById('v_valeur_display');
        if (!elValDisplay) return;

        let valNeuve = parseFloat(elValDisplay.value.replace(/\s/g, '').replace(',', '.')) || 0;
        let montantDevis = parseFloat((document.getElementById('v_devis_display') || { value: '0' }).value.replace(/\s/g, '').replace(',', '.')) || 0;
        let accordDevis = parseFloat((document.getElementById('v_accord_display') || { value: '0' }).value.replace(/\s/g, '').replace(',', '.')) || 0;

        const useCorrectives = (document.getElementById('chk_correctives') || { checked: false }).checked;
        let kmCompteur = null;
        let entretienPercent = 0;

        const rawKmValue = (document.getElementById('v_km_compteur') || { value: '' }).value.trim();
        if (useCorrectives) {
            if (rawKmValue !== "") kmCompteur = parseFloat(rawKmValue);
            entretienPercent = parseFloat((document.getElementById('v_entretien') || { value: 0 }).value) || 0;
        }

        const isTechReform = (document.getElementById('chk_tech_reform') || { checked: false }).checked;
        const selectedTechReasons = getSelectedTechReasons();

        const dmecInput = (document.getElementById('v_dmec') || { value: '' }).value;
        const sinistreInput = (document.getElementById('v_sinistre') || { value: '' }).value;
        const cat = (document.getElementById('v_cat') || { value: '' }).value;
        const pf = parseInt((document.getElementById('v_pf') || { value: 0 }).value) || 0;
        const carb = (document.getElementById('v_carb') || { value: '' }).value;

        if (valNeuve <= 0) return;

        let tableRows = [];
        let labels = ["Neuf"];
        let plotData = [valNeuve];
        let dmec = null;
        let sinistre = null;
        let annee = 1;

        if (dmecInput && sinistreInput) {
            dmec = new Date(dmecInput);
            sinistre = new Date(sinistreInput);
            if (sinistre < dmec) {
                showToast("La date sinistre ne peut être antérieure é  la MEC", "error");
                return;
            }

            let valAct = valNeuve;
            let dAnniv = new Date(dmec);

            while (true) {
                let dStart = new Date(dAnniv);
                let dNext = new Date(dStart);
                dNext.setFullYear(dStart.getFullYear() + 1);
                let dEndEff = dNext > sinistre ? new Date(sinistre) : new Date(dNext.getTime() - 86400000);
                const jours = Math.ceil(Math.abs(dEndEff - dStart) / 86400000) + 1;
                const t = getTaux(annee, cat, pf, carb);
                const perte = dNext > sinistre ? (valAct * t * (jours / 365)) : (valAct * t);
                const valFin = valAct - perte;

                tableRows.push({ annee, start: dStart, end: dEndEff, t, valDeb: valAct, perte, valFin, jours });
                labels.push("An " + annee);
                plotData.push(valFin);

                if (dNext > sinistre) break;
                valAct = valFin;
                dAnniv = dNext;
                annee++;
                if (annee > 100) break;
            }
        }

        let valBase = valNeuve;
        let ageAnnees = 0;
        if (tableRows.length > 0 && dmec && sinistre) {
            valBase = tableRows[tableRows.length - 1].valFin;
            ageAnnees = Math.max(0, (sinistre - dmec) / (1000 * 60 * 60 * 24 * 365.25));
        }

        let montantAdjKm = 0;
        let montantAdjEntretien = 0;
        if (useCorrectives) {
            const refKmAn = getReferenceKmPerYear(cat, carb);
            const kmTheorique = refKmAn * ageAnnees;
            let ratioKm = 0;
            if (kmCompteur !== null && kmTheorique > 0) {
                ratioKm = ((kmCompteur - kmTheorique) / kmTheorique) / 2;
            }
            if (ratioKm > 0.20) ratioKm = 0.20;
            if (ratioKm < -0.20) ratioKm = -0.20;
            montantAdjKm = valBase * (-ratioKm);
            montantAdjEntretien = valBase * (entretienPercent / 100);
        }

        const valTechnique = valBase + montantAdjKm + montantAdjEntretien;
        const marketBoostEl = document.getElementById('v_market_boost');
        const marketPercent = marketBoostEl ? parseInt(marketBoostEl.value) || 0 : 0;
        const marketValueAdded = valTechnique * (marketPercent / 100);
        const valFinale = valTechnique + marketValueAdded;

        safeSetText('kpi-final-retained', formatFinance(valFinale));
        safeSetText('det-val-base', formatFinance(valBase));
        safeSetText('det-val-final', formatFinance(valFinale));

        const applyToThreshold = (document.getElementById('chk_apply_to_threshold') || { checked: false }).checked;
        let baseForThreshold = applyToThreshold ? valTechnique : valBase;
        const seuilReform = (baseForThreshold * 2) / 3;

        let referenceCost = accordDevis > 0 ? accordDevis : montantDevis;
        const isEcoReformMath = referenceCost > seuilReform;
        const isEcoReformManual = (document.getElementById('chk_eco_reform') || { checked: false }).checked;

        let ecoReasonsList = [];
        if (isEcoReformMath) {
            let labelCost = accordDevis > 0 ? "Accord" : "Devis";
            ecoReasonsList.push(`${labelCost} > Seuil 2/3`);
        }
        if (isEcoReformManual) {
            ecoReasonsList = ecoReasonsList.concat(getSelectedEcoReasons());
        }

        const vradeTableBody = document.getElementById('vradeTable');
        if (vradeTableBody) {
            vradeTableBody.innerHTML = tableRows.map(r => `
                        <tr>
                            <td class="p-2 border-b border-slate-50 font-medium text-blue-900">An ${r.annee}</td>
                            <td class="p-2 border-b border-slate-50 text-center text-xs bg-slate-100/50 rounded-lg">${(r.t * 100).toFixed(0)}%</td>
                            <td class="p-2 border-b border-slate-50 text-right font-bold text-slate-700">${formatFinance(r.valFin)}</td>
                        </tr>
                    `).join('');
        }

        // Update charts if they exist
        if (typeof Chart !== 'undefined' && document.getElementById('chartEvo')) {
            if (chartEvo) chartEvo.destroy();
            const ctxEvo = document.getElementById('chartEvo').getContext('2d');
            chartEvo = new Chart(ctxEvo, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Valeur Véhicule',
                        data: plotData,
                        borderColor: '#1e3a8a',
                        tension: 0.3,
                        fill: true,
                        backgroundColor: 'rgba(30, 58, 138, 0.1)'
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        if (typeof Chart !== 'undefined' && document.getElementById('chartDist')) {
            if (chartDist) chartDist.destroy();
            const ctxDist = document.getElementById('chartDist').getContext('2d');
            chartDist = new Chart(ctxDist, {
                type: 'doughnut',
                data: {
                    labels: ['Valeur Finale', 'Dépréciation'],
                    datasets: [{
                        data: [valFinale, Math.max(0, valNeuve - valFinale)],
                        backgroundColor: ['#1e3a8a', '#e2e8f0']
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '70%' }
            });
        }

        finalCalculation = { valBase, valFinale, seuil: seuilReform, isTechReform, selectedTechReasons, ecoReasonsList };

    } catch (error) {
        console.warn("Erreur updateVrade:", error);
    }
}

function getSelectedTechReasons() {
    const checkboxes = document.querySelectorAll('input[name="tech_reason"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function getSelectedEcoReasons() {
    const checkboxes = document.querySelectorAll('input[name="eco_reason"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function toggleCorrectives() { updateVrade(); }
function toggleTechReason() { updateVrade(); }
function toggleEcoReason() { updateVrade(); }
function syncMarketSlider(val) {
    const el = document.getElementById('v_market_boost_manual');
    if (el) el.value = val;
    updateVrade();
}
function syncMarketManual(val) {
    const el = document.getElementById('v_market_boost');
    if (el) el.value = val;
    updateVrade();
}

// --- ECOUTEURS D'EVENEMENTS ---
function resetApp() {
    if (confirm("Voulez-vous vraiment réinitialiser TOUTE l'application ?")) {
        localStorage.removeItem('betcam_expert_v64');
        window.location.reload();
    }
}

function clearPartsOnly() {
    if (confirm("Voulez-vous vraiment effacer TOUTES les pièces ?")) {
        pushPartsSnapshot();
        parts = [];
        renderParts();
        saveDataDebounced();
        showToast("Liste des pièces vidée", "success");
    }
}

function handleReportType() {
    // Cette fonction est appelée lors du changement de type de rapport (Normal/Contre-expertise/etc)
    const sidebar = document.getElementById('main_sidebar');
    const showBtn = document.getElementById('show_sidebar_btn');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
    if (showBtn) {
        showBtn.classList.remove('hidden');
    }
    updatePDFData();
    saveDataDebounced();
}


window.onload = () => {
    populateMakes();
    updateDesignations();
    loadData();
    updateVrade();
    
    if (typeof initTranslations === 'function') {
        initTranslations();
        const savedLang = localStorage.getItem('betcam_expert_lang') || 'FR';
        setLanguage(savedLang);
    }
    
    // Fonction commune pour la sauvegarde et la mise à jour (Actualisation Live Option 2)
    const handleFormChange = (e) => {
        if (e.target.closest('input, select, textarea')) {
            // Lancer les calculs en temps réel
            if (typeof calcAge === 'function') calcAge();
            if (typeof calculImmo === 'function') calculImmo();
            if (typeof updateVrade === 'function') updateVrade();
            if (typeof updateIndemnite === 'function') updateIndemnite();

            saveDataDebounced();
            updatePDFData();
        }
    };

    // Écouter à la fois 'input' (pour la saisie) et 'change' (pour les listes déroulantes, cases à cocher...)
    document.addEventListener('input', handleFormChange);
    document.addEventListener('change', handleFormChange);

    // --- PROTECTION : Avertissement avant fermeture accidentelle ---
    window.addEventListener('beforeunload', function(e) {
        if (parts.length > 0 || (document.getElementById('ref_dossier') && document.getElementById('ref_dossier').value)) {
            e.preventDefault();
            e.returnValue = '';
        }
    });

    // --- PROTECTION : Ctrl+Z pour annuler les pièces ---
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.target.matches('input, textarea, select')) {
            e.preventDefault();
            undoParts();
        }
    });
};

window.onclick = (e) => {
    if (!e.target.closest('#part_name')) {
        const sugg = document.getElementById('custom_suggestions');
        if (sugg) sugg.classList.add('hidden');
    }
};


function calcAge() {
    const mec = document.getElementById("date_mec").value;
    const sinistre = document.getElementById("date_sinistre").value;
    const display = document.getElementById("display_age");
    if (!mec || !sinistre || !display) return;

    const d1 = new Date(mec);
    const d2 = new Date(sinistre);
    if (d2 < d1) {
        display.innerText = "DATE INCOHÉRENTE";
        return;
    }

    const diff = d2 - d1;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));

    let res = "";
    if (years > 0) res += years + " AN" + (years > 1 ? "S" : "");
    if (months > 0) res += (res ? " ET " : "") + months + " MOIS";
    if (!res) res = "MOINS D'UN MOIS";

    display.innerText = res;
    updatePDFData();
}

function handleSourceChange() {
    const sourceEl = document.querySelector('input[name="part_source"]:checked');
    const source = sourceEl ? sourceEl.value : 'ORIGINE';
    const rateInput = document.getElementById("manual_rate");
    if (source === 'ORIGINE' && rateInput) {
        // Logique optionnelle
    }
    updatePDFData();
}

function toggleFormContext() {
    const typeInput = document.getElementById("part_type");
    if (!typeInput) return;
    const type = typeInput.value;
    const priceLabel = document.getElementById("price_field_label");
    const specs = document.getElementById("piece_specs_container");

    if (laborCategories.includes(type)) {
        if (priceLabel) priceLabel.innerText = "Taux Horaire / Forfait";
        if (specs) specs.classList.add("hidden");
    } else {
        if (priceLabel) priceLabel.innerText = "Prix Unit. HT";
        if (specs) specs.classList.remove("hidden");
    }
    updateDesignations();
}

function fillTestData() {
    if (!confirm("Voulez-vous remplir les champs avec des données de test ?")) return;

    // Step 1
    const fieldsStep1 = {
        'ref_dossier': 'TEST/2026/01',
        'date_mission': new Date().toISOString().split('T')[0],
        'requerant_name': 'ASSURANCE TEST',
        'cie_assurance': 'AXA ASSURANCE MAROC',
        'intermediaire_name': 'AGENCE CENTRALE',
        'assure_name': 'MOHAMMED TEST',
        'tiers_name': 'AHMED TIERS'
    };

    // Step 2
    const fieldsStep2 = {
        'ref_immat': '12345-A-1',
        'veh_make': 'RENAULT',
        'veh_model': 'CLIO 4',
        'veh_chassis': 'VF1TESTCHASSIS1234',
        'date_mec': '2019-05-10',
        'veh_pf': '6',
        'veh_energie': 'DIESEL',
        'veh_cat': 'PP/Non Utilitaire',
        'veh_usage': 'PERSONNEL'
    };

    // Step 3
    const fieldsStep3 = {
        'date_sinistre': '2026-05-01',
        'date_visite': '2026-05-05',
        'expert_1_name': 'EXPERT A',
        'expert_2_name': 'EXPERT B',
        'lieu_visite': 'GARAGE TEST',
        'reparateur_name': 'AUTO REPAR'
    };

    // Populate text/date/select fields
    Object.assign(fieldsStep1, fieldsStep2, fieldsStep3);
    for (const [id, value] of Object.entries(fieldsStep1)) {
        const el = document.getElementById(id);
        if (el) {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    // Add some parts to devis
    const part_name = document.getElementById('part_name');
    const part_price = document.getElementById('part_price');
    if (part_name && part_price) {
        part_name.value = 'PARE CHOCS AVANT';
        part_price.value = '1500';
        if (typeof addPart === 'function') addPart();

        part_name.value = 'PHARE GAUCHE';
        part_price.value = '2500';
        if (typeof addPart === 'function') addPart();
    }

    // Trigger specific updates
    if (typeof updateCieAssurance === 'function') updateCieAssurance();
    if (typeof calcAge === 'function') calcAge();
    if (typeof saveDataDebounced === 'function') saveDataDebounced();
    if (typeof updatePDFData === 'function') updatePDFData();

    showToast("Données de test injectées", "success");
}

// --- EXPORT EXCEL ---
function exportToExcel() {
    try {
        if (typeof XLSX === 'undefined') {
            showToast("La bibliothèque Excel n'est pas chargée", "error");
            return;
        }
        
        const isEN = (typeof currentLanguage !== 'undefined' && currentLanguage === 'EN');
        let data = [
            [isEN ? "Expert Report - BETCAM" : "Rapport d'expertise - BETCAM"],
            [isEN ? "Date" : "Date", new Date().toLocaleDateString(isEN ? 'en-US' : 'fr-FR')],
            [isEN ? "File" : "Dossier", (document.getElementById('ref_dossier') || {}).value || "N/A"],
            [isEN ? "Registration" : "Immatriculation", (document.getElementById('ref_immat') || {}).value || "N/A"],
            [],
            isEN ? 
                ["Type", "Description", "Source", "Quantity", "Unit Price (HT)", "Depreciation Rate", "Total (Net)"] :
                ["Type", "Désignation", "Source", "Quantité", "Prix Unitaire (HT)", "Taux Vétusté", "Total (Net)"]
        ];

        const tvaGarageEl = document.getElementById('garage_tva_applicable');
        const isTvaApplicable = tvaGarageEl ? (tvaGarageEl.value === 'OUI') : true;
        const garageType = (document.getElementById('lieu_type') || {}).value || "NORMALE";

        parts.forEach(p => {
            let baseHT = p.price * p.qty;
            let vet = baseHT * (p.rate / 100);
            let nht = baseHT - vet;
            
            const partTVAEnabled = isPartTVAEnabled(p, isTvaApplicable, garageType);
            let tva = partTVAEnabled ? round2(nht * 0.2) : 0;
            
            const isEN = (typeof currentLanguage !== 'undefined' && currentLanguage === 'EN');
            const typeStr = isEN ? translatePartType(p.type) : (p.type || "");
            const nameStr = isEN ? translatePartName(p.name) : (p.name || "");
            const sourceStr = isEN ? translatePartSource(p.source) : (p.source || "");

            data.push([
                typeStr,
                nameStr,
                sourceStr,
                p.qty || 1,
                p.price || 0,
                (p.rate || 0) + "%",
                (nht + tva).toFixed(2)
            ]);
        });

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Expertise");

        const ref = (document.getElementById('ref_dossier') || {}).value || "expertise";
        XLSX.writeFile(wb, `Export_${ref.replace(/[^a-z0-9]/gi, '_')}.xlsx`);
        showToast("Export Excel réussi", "success");
    } catch (e) {
        console.warn("Erreur lors de l'export Excel:", e);
        showToast("Erreur lors de l'export", "error");
    }
}


// --- IMPORT AUTOMATIQUE DE PDF ---
async function handlePDFImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (typeof pdfjsLib === 'undefined') {
        showToast("La bibliothèque PDF n'est pas chargée.", "error");
        return;
    }

    try {
        showToast("Analyse du PDF en cours...", "info");
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        
        // Regroupement spatial strict par coordonnées Y
        const lines = [];
        for (let item of textContent.items) {
            const y = item.transform[5];
            const x = item.transform[4];
            const str = item.str.trim();
            if (!str) continue;

            let line = lines.find(l => Math.abs(l.y - y) < 6); // Tolérance de 6 points
            if (!line) {
                line = { y: y, items: [] };
                lines.push(line);
            }
            line.items.push({ x: x, str: str });
        }

        // Trier les lignes de haut en bas (Y décroissant)
        lines.sort((a, b) => b.y - a.y);
        
        // Reconstruire le texte complet
        let text = "";
        lines.forEach(line => {
            // Trier les éléments de la ligne de gauche à droite
            line.items.sort((a, b) => a.x - b.x);
            const lineText = line.items.map(i => i.str).join(' ');
            text += lineText + '\n';
        });

        // Debug : injecter le texte extrait si on est en mode test
        const debugDump = document.getElementById('pdf_debug_dump');
        if (debugDump) debugDump.value = "SORTED STRICT:\n" + text;

        const extract = (regex) => {
            const match = text.match(regex);
            if (!match) return '';
            let val = match[1].trim();
            if (val.startsWith(':')) val = val.substring(1).trim();
            return val;
        };

        const assure = extract(/Nom Assur[ée]\s*[: ]*\s*(.*)/i);
        if (assure) document.getElementById('assure_name').value = assure;

        const policeAssure = extract(/Num[ée]ro contrat\s*[: ]*\s*([A-Z0-9\.\-\/]+)/i);
        if (policeAssure) document.getElementById('police_assure').value = policeAssure;

        const refSinistre = extract(/Num[ée]ro Sinistre\s*[: ]*\s*([A-Z0-9\.\-\/]+)/i);
        if (refSinistre) document.getElementById('ref_sinistre').value = refSinistre;

        const dateSinRaw = extract(/Date Survenance\s*[: ]*\s*(\d{2}\/\d{2}\/\d{4})/i);
        if (dateSinRaw) {
            const [d, m, y] = dateSinRaw.split('/');
            document.getElementById('date_sinistre').value = `${y}-${m}-${d}`;
        }

        const dateDeclRaw = extract(/Date D[ée]claration\s*[: ]*\s*(\d{2}\/\d{2}\/\d{4})/i);
        if (dateDeclRaw) {
            const [d, m, y] = dateDeclRaw.split('/');
            document.getElementById('date_mission').value = `${y}-${m}-${d}`;
        }

        const garantieRaw = extract(/Garantie[^\:]*?mise[^\:]*?jeu\s*[: ]*\s*(.*)/i);
        if (garantieRaw) {
            const garUpper = garantieRaw.toUpperCase();
            let garantieValue = "";
            if (garUpper.includes("RESPONSABILITÉ CIVILE") || garUpper.includes("RESPONSABILITE CIVILE") || garUpper.includes("RC")) {
                garantieValue = "RC";
            } else if (garUpper.includes("TIERCE") || garUpper.includes("TOUT ACCIDENT")) {
                garantieValue = "TIERCE";
            } else if (garUpper.includes("COLLISION")) {
                garantieValue = "COLLISION";
            } else if (garUpper.includes("INCENDIE")) {
                garantieValue = "INCENDIE";
            } else if (garUpper.includes("VOL")) {
                garantieValue = "VOL";
            }
            if (garantieValue) {
                document.getElementById('garantie_sinistre').value = garantieValue;
            }
        }
        
        const interAssure = extract(/Interm[ée]diaire\s*[: ]*\s*(.*)/i);
        if (interAssure) document.getElementById('intermediaire_assure').value = interAssure;

        const immatWW = extract(/Immatriculation(?: du v[ée]hicule)?\s*WW\s*[: ]*\s*([0-9]+)/i);
        if (immatWW) document.getElementById('ref_immat_ww').value = immatWW;

        const immat = extract(/Immatriculation(?: du v[ée]hicule)?(?!\s*WW)\s*[: ]*\s*([0-9A-Za-z\-\u0600-\u06FF]+)/i);
        if (immat) document.getElementById('ref_immat').value = padImmatString(immat);

        const marqueModele = extract(/Marque(?: du v[ée]hicule)?\s*[: ]*\s*(.*)/i);
        if (marqueModele) {
            const parts = marqueModele.split(/\s+/);
            if (parts.length > 0) document.getElementById('veh_make').value = parts[0];
            if (typeof updateModels === 'function') updateModels();
            if (typeof updateGenreImage === 'function') updateGenreImage();
            if (typeof updateGenreImage === 'function') updateGenreImage();
            if (parts.length > 1) document.getElementById('veh_model').value = parts.slice(1).join(' ');
        }

        
        const genreRaw = extract(/Genre(?: du v[ée]hicule)?\s*[: ]*\s*(.*)/i);
        if (genreRaw) {
            let genreUpper = genreRaw.toUpperCase().trim();
            let mappedGenre = "";
            
            // 1- Véhicules de Tourisme (V.P) (A)
            if (genreUpper.includes("VOITURE") || genreUpper.includes("V.P") || genreUpper.includes("TOURISME") || genreUpper.includes("PARTICULIERE") || genreUpper.includes("C.I")) {
                mappedGenre = "V.P";
            } 
            // 2- Véhicules utilitaires et de TCP (C1 - C2)
            else if (genreUpper.includes("CAMMIONNETTE") || genreUpper.includes("CAMIONNETTE") || genreUpper.includes("UTILITAIRE")) {
                mappedGenre = "CAMMIONNETTE";
            } else if (genreUpper.includes("FOURGONNETTE")) {
                mappedGenre = "FOURGONNETTE";
            } else if (genreUpper.includes("FOURGON")) {
                mappedGenre = "FOURGON";
            } else if (genreUpper.includes("DOUBLE CABINE") || genreUpper.includes("PICK-UP DC")) {
                mappedGenre = "PICK-UP DOUBLE CABINE";
            } else if (genreUpper.includes("PICK-UP") || genreUpper.includes("PICK UP")) {
                mappedGenre = "PICK-UP";
            } else if (genreUpper.includes("CAMION") || genreUpper.includes("CAM") || genreUpper.includes("POIDS LOURD")) {
                mappedGenre = "CAMION";
            } else if (genreUpper.includes("TRACTEUR ROUTIER") || genreUpper.includes("TR")) {
                mappedGenre = "TRACTEUR ROUTIER (TR)";
            }
            // 3- Motocycles et Cyclomoteurs
            else if (genreUpper.includes("MOTO") || genreUpper.includes("MOTOCYCLETTE") || genreUpper.includes("CYCLO")) {
                mappedGenre = "MOTOCYCLE";
            } else if (genreUpper.includes("TRIPORTEUR")) {
                mappedGenre = "TRIPORTEUR";
            } else if (genreUpper.includes("QUAD")) {
                mappedGenre = "QUAD";
            }
            // 4. Véhicules de Transport de Personnes (TP)
            else if (genreUpper.includes("TAXI")) {
                mappedGenre = "TAXI";
            } else if (genreUpper.includes("TRANSPORT COMMUN") || genreUpper.includes("TCP") || genreUpper.includes("AUTOCAR") || genreUpper.includes("BUS") || genreUpper.includes("AUTOBUS")) {
                mappedGenre = "TCP";
            } else if (genreUpper.includes("LOCATION")) {
                mappedGenre = "LOCATION";
            }
            // 5. Engins et Véhicules Spéciaux
            else if (genreUpper.includes("ENGIN") || genreUpper.includes("CHANTIER")) {
                mappedGenre = "ENGIN";
            } else if (genreUpper.includes("TRACTEUR AGRI") || genreUpper.includes("AGRI")) {
                mappedGenre = "AGRI";
            } else {
                mappedGenre = genreUpper; 
            }
            
            if (mappedGenre) {
                const vehGenreEl = document.getElementById('veh_genre');
                if (vehGenreEl) {
                    // Vérifier si l'option existe
                    let optionExists = Array.from(vehGenreEl.options).some(opt => opt.value === mappedGenre);
                    if (!optionExists) {
                        const newOption = new Option(mappedGenre, mappedGenre);
                        vehGenreEl.add(newOption);
                    }
                    vehGenreEl.value = mappedGenre;
                }
            }
        }

        const adv = extract(/Adversaire\s*[: ]*\s*(.*)/i);
        if (adv) {
            // Nettoyer le mot "Adversaire" s'il a été inclus en double
            const cleanAdv = adv.replace(/^Adversaire\s*[:\- ]*/i, '').trim();
            document.getElementById('nom_tiers').value = cleanAdv;
        }

        const cieAdv = extract(/Compagnie Adverse\s*[: ]*\s*(.*)/i);
        if (cieAdv) document.getElementById('cie_tiers').value = cieAdv;

        // On utilise ^ ou \b pour ne pas matcher "Marque du véhicule" par erreur
        const vehAdv = extract(/(?:^|\n)\s*V[ée]hicule\s*[: ]*\s*(.*)/i);
        if (vehAdv) document.getElementById('veh_tiers').value = vehAdv;

        const matWWAdv = extract(/Matricule\s*WW\s*[: ]*\s*([0-9]+)/i);
        if (matWWAdv) document.getElementById('immat_tiers_ww').value = matWWAdv;

        const matAdv = extract(/Matricule(?!\s*WW)\s*[: ]*\s*([0-9A-Za-z\-\u0600-\u06FF]+)/i);
        if (matAdv) document.getElementById('immat_tiers').value = padImmatString(matAdv);

        const polAdv = extract(/Police\s*[: ]*\s*([A-Z0-9\.\-\/]+)/i);
        if (polAdv) document.getElementById('police_tiers').value = polAdv;

        // Sauvegarder et actualiser l'interface
        if (typeof saveDataDebounced === 'function') saveDataDebounced();
        if (typeof highlightEmptyFields === 'function') highlightEmptyFields();
        showToast("Données importées avec succès !", "success");

    } catch (e) {
        console.error("Erreur de parsing PDF:", e);
        showToast("Erreur lors de la lecture du PDF", "error");
    } finally {
        event.target.value = ""; // Réinitialiser
    }
}

// --- AUTO-FORMAT MATRICULE SUR PERTE DE FOCUS ---
document.addEventListener('focusout', function(e) {
    if (e.target && (e.target.id === 'ref_immat' || e.target.id === 'immat_tiers')) {
        if (typeof padImmatString === 'function') {
            e.target.value = padImmatString(e.target.value);
            if (typeof updatePDFData === 'function') updatePDFData();
            if (typeof saveDataDebounced === 'function') saveDataDebounced();
        }
    }
});

// --- FONCTION POUR METTRE EN ÉVIDENCE LES CHAMPS VIDES ---
function highlightEmptyFields() {
    const fieldsToHighlight = document.querySelectorAll('#step_1 .input-field, #step_2 .input-field');
    fieldsToHighlight.forEach(input => {
        if (input.type === 'hidden' || input.id === 'pdf_import_input') return;
        
        if (!input.value || input.value.trim() === '') {
            input.classList.add('empty-highlight');
        } else {
            input.classList.remove('empty-highlight');
        }
    });
}

document.addEventListener('input', function(e) {
    if (e.target && e.target.classList.contains('empty-highlight')) {
        if (e.target.value && e.target.value.trim() !== '') {
            e.target.classList.remove('empty-highlight');
        }
    }
});
document.addEventListener('change', function(e) {
    if (e.target && e.target.classList.contains('empty-highlight')) {
        if (e.target.value && e.target.value.trim() !== '') {
            e.target.classList.remove('empty-highlight');
        }
    }
});


function showSidebar() {
    const sidebar = document.getElementById('main_sidebar');
    const showBtn = document.getElementById('show_sidebar_btn');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
    if (showBtn) {
        showBtn.classList.add('hidden');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('main_sidebar');
    const showBtn = document.getElementById('show_sidebar_btn');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
    if (showBtn) {
        showBtn.classList.remove('hidden');
    }
}


// Fonction pour mettre a jour la photo de choc selon le genre
window.updateGenreImage = function() {
    const genreEl = document.getElementById('veh_genre');
    if (!genreEl) return;
    const genre = (genreEl.value || "").toUpperCase();

    let imgSrc = "voiture.png";

    if (genre === "V.P" || genre.includes("TOURISME") || genre.includes("LOCATION")) {
        imgSrc = "voiture.png";
    } else if (genre === "TAXI") {
        imgSrc = "TAXI.png";
    } else if (genre === "CAMMIONNETTE") {
        imgSrc = "CAMMIONNETTE.png";
    } else if (genre === "FOURGONNETTE" || genre === "FOURGON") {
        imgSrc = "FOURGONNETTE.png";
    } else if (genre.includes("PICK-UP")) {
        imgSrc = "PICK-UP.png";
    } else if (genre === "CAMION" || genre.includes("TRACTEUR ROUTIER") || genre === "ENGIN") {
        imgSrc = "CAMION.png";
    } else if (genre === "TCP" || genre.includes("AUTOBUS") || genre.includes("AUTOCAR")) {
        imgSrc = "AUTOBUS.png";
    } else if (genre === "AGRI" || genre.includes("AGRICOLE")) {
        imgSrc = "TRACTEUR AGRICOLE.png";
    } else if (genre.includes("QUAD")) {
        imgSrc = "QUAD.png";
    } else if (genre.includes("TRIPORTEUR")) {
        imgSrc = "TRIPORTEUR.png";
    } else if (genre.includes("MOTO") || genre.includes("CYCLO")) {
        imgSrc = "moto.png";
    } else {
        imgSrc = "voiture.png";
    }
    
    // Mettre à jour toutes les occurrences de l'image de genre (UI, Modèle A, Modèle B)
    const images = document.querySelectorAll('#veh_genre_img, #b_veh_genre_img');
    images.forEach(img => {
        img.src = imgSrc;
        img.style.filter = "none";
    });

    if (typeof applyMarkerPositions === 'function') {
        applyMarkerPositions(imgSrc);
    }
};

function applyMarkerPositions(imgSrc) {
    const configs = {
        'voiture.png': {
            AVD: { left: '20px', top: '20px', right: 'auto', bottom: 'auto' },
            AV: { left: '10px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '20px', top: '380px', right: 'auto', bottom: 'auto' },
            ARD: { right: '20px', top: '20px', left: 'auto', bottom: 'auto' },
            AR: { right: '10px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '20px', top: '380px', left: 'auto', bottom: 'auto' },
            LATD: { top: '5px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '5px', left: '360px', right: 'auto', top: 'auto' }
        },
        'TAXI.png': {
            AVD: { left: '20px', top: '20px', right: 'auto', bottom: 'auto' },
            AV: { left: '10px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '20px', top: '380px', right: 'auto', bottom: 'auto' },
            ARD: { right: '20px', top: '20px', left: 'auto', bottom: 'auto' },
            AR: { right: '10px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '20px', top: '380px', left: 'auto', bottom: 'auto' },
            LATD: { top: '5px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '5px', left: '360px', right: 'auto', top: 'auto' }
        },
        'CAMION.png': {
            AVD: { left: '30px', top: '15px', right: 'auto', bottom: 'auto' },
            AV: { left: '5px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '30px', top: '385px', right: 'auto', bottom: 'auto' },
            ARD: { right: '30px', top: '15px', left: 'auto', bottom: 'auto' },
            AR: { right: '5px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '30px', top: '385px', left: 'auto', bottom: 'auto' },
            LATD: { top: '0px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '0px', left: '360px', right: 'auto', top: 'auto' }
        },
        'CAMMIONNETTE.png': {
            AVD: { left: '25px', top: '15px', right: 'auto', bottom: 'auto' },
            AV: { left: '10px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '25px', top: '385px', right: 'auto', bottom: 'auto' },
            ARD: { right: '25px', top: '15px', left: 'auto', bottom: 'auto' },
            AR: { right: '10px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '25px', top: '385px', left: 'auto', bottom: 'auto' },
            LATD: { top: '2px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '2px', left: '360px', right: 'auto', top: 'auto' }
        },
        'FOURGONNETTE.png': {
            AVD: { left: '25px', top: '15px', right: 'auto', bottom: 'auto' },
            AV: { left: '10px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '25px', top: '385px', right: 'auto', bottom: 'auto' },
            ARD: { right: '25px', top: '15px', left: 'auto', bottom: 'auto' },
            AR: { right: '10px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '25px', top: '385px', left: 'auto', bottom: 'auto' },
            LATD: { top: '2px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '2px', left: '360px', right: 'auto', top: 'auto' }
        },
        'PICK-UP.png': {
            AVD: { left: '25px', top: '15px', right: 'auto', bottom: 'auto' },
            AV: { left: '10px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '25px', top: '385px', right: 'auto', bottom: 'auto' },
            ARD: { right: '25px', top: '15px', left: 'auto', bottom: 'auto' },
            AR: { right: '10px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '25px', top: '385px', left: 'auto', bottom: 'auto' },
            LATD: { top: '2px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '2px', left: '360px', right: 'auto', top: 'auto' }
        },
        'AUTOBUS.png': {
            AVD: { left: '30px', top: '15px', right: 'auto', bottom: 'auto' },
            AV: { left: '5px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '30px', top: '385px', right: 'auto', bottom: 'auto' },
            ARD: { right: '30px', top: '15px', left: 'auto', bottom: 'auto' },
            AR: { right: '5px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '30px', top: '385px', left: 'auto', bottom: 'auto' },
            LATD: { top: '0px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '0px', left: '360px', right: 'auto', top: 'auto' }
        },
        'TRACTEUR AGRICOLE.png': {
            AVD: { left: '50px', top: '30px', right: 'auto', bottom: 'auto' },
            AV: { left: '20px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '50px', top: '350px', right: 'auto', bottom: 'auto' },
            ARD: { right: '50px', top: '30px', left: 'auto', bottom: 'auto' },
            AR: { right: '20px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '50px', top: '350px', left: 'auto', bottom: 'auto' },
            LATD: { top: '15px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '15px', left: '360px', right: 'auto', top: 'auto' }
        },
        'moto.png': {
            AVD: { left: '100px', top: '50px', right: 'auto', bottom: 'auto' },
            AV: { left: '20px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '100px', top: '350px', right: 'auto', bottom: 'auto' },
            ARD: { right: '100px', top: '50px', left: 'auto', bottom: 'auto' },
            AR: { right: '20px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '100px', top: '350px', left: 'auto', bottom: 'auto' },
            LATD: { top: '30px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '30px', left: '360px', right: 'auto', top: 'auto' }
        },
        'QUAD.png': {
            AVD: { left: '40px', top: '40px', right: 'auto', bottom: 'auto' },
            AV: { left: '15px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '40px', top: '360px', right: 'auto', bottom: 'auto' },
            ARD: { right: '40px', top: '40px', left: 'auto', bottom: 'auto' },
            AR: { right: '15px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '40px', top: '360px', left: 'auto', bottom: 'auto' },
            LATD: { top: '15px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '15px', left: '360px', right: 'auto', top: 'auto' }
        },
        'TRIPORTEUR.png': {
            AVD: { left: '60px', top: '30px', right: 'auto', bottom: 'auto' },
            AV: { left: '15px', top: '200px', right: 'auto', bottom: 'auto' },
            AVG: { left: '60px', top: '370px', right: 'auto', bottom: 'auto' },
            ARD: { right: '60px', top: '30px', left: 'auto', bottom: 'auto' },
            AR: { right: '15px', top: '200px', left: 'auto', bottom: 'auto' },
            ARG: { right: '60px', top: '370px', left: 'auto', bottom: 'auto' },
            LATD: { top: '10px', left: '360px', right: 'auto', bottom: 'auto' },
            LATG: { bottom: '10px', left: '360px', right: 'auto', top: 'auto' }
        }
    };

    const config = configs[imgSrc] || configs['voiture.png'];
    const prefixes = ['mark_', 'pdf_mark_'];

    Object.keys(config).forEach(zone => {
        prefixes.forEach(prefix => {
            const el = document.getElementById(prefix + zone);
            if (el) {
                const styles = config[zone];
                el.style.left = styles.left;
                el.style.top = styles.top;
                el.style.right = styles.right;
                el.style.bottom = styles.bottom;
            }
        });
    });
}

// Fonction pour gerer le changement de genre (saisie manuelle incluse)
window.handleGenreChange = function(selectEl) {
    if (selectEl.value === "NEW_MANUAL") {
        selectEl.classList.add('hidden');
        const container = document.getElementById('veh_genre_manual_container');
        const input = document.getElementById('veh_genre_manual');
        if (container && input) {
            container.classList.remove('hidden');
            input.value = "";
            input.focus();
        }
    }
    if (typeof updateGenreImage === 'function') updateGenreImage();
};

window.confirmGenreManual = function() {
    const input = document.getElementById('veh_genre_manual');
    const selectEl = document.getElementById('veh_genre');
    const container = document.getElementById('veh_genre_manual_container');
    
    if (!input || !selectEl || !container) return;
    
    const val = input.value.toUpperCase().trim();
    if (val !== "") {
        let optionExists = Array.from(selectEl.options).some(opt => opt.value === val);
        if (!optionExists) {
            const opt = new Option(val, val);
            selectEl.add(opt, selectEl.options[selectEl.options.length - 1]);
        }
        selectEl.value = val;
    } else {
        selectEl.value = "";
    }
    
    container.classList.add('hidden');
    selectEl.classList.remove('hidden');
    if (typeof updateGenreImage === 'function') updateGenreImage();
};

window.cancelGenreManual = function() {
    const selectEl = document.getElementById('veh_genre');
    const container = document.getElementById('veh_genre_manual_container');
    
    if (!selectEl || !container) return;
    
    selectEl.value = "";
    container.classList.add('hidden');
    selectEl.classList.remove('hidden');
    if (typeof updateGenreImage === 'function') updateGenreImage();
};


// --- BILINGUAL (EN/FR) TRANSLATION ENGINE ---
let currentLanguage = 'FR';
let textNodeRegistry = [];

const I18N_DICTS = {
    'FR': {
        'nav_new_report': "Nouveau Rapport",
        'nav_claim_type': "Type de sinistre",
        'label_normal': "Normal",
        'label_contradictory': "Contradictoire",
        'label_collegial': "Collégiale",
        'label_preliminary': "Préliminaire",
        'label_estimated': "Estimatif",
        
        'header_title': "RAPPORT DÉFINITIF ATLANTASANAD ET WAFA ASSURANCE",
        'expert_manager': "Expert Manager",
        'automobile': "Automobile",
        
        'btn_vider': "Vider",
        'btn_nouveau': "Nouveau",
        'btn_test': "Test",
        'btn_pdf': "Aperçu PDF",
        'btn_excel': "EXCEL",
        
        'step_1_num': "Étape 1",
        'step_1_lbl': "DOSSIER",
        'step_2_num': "Étape 2",
        'step_2_lbl': "VÉHICULE",
        'step_3_num': "Étape 3",
        'step_3_lbl': "EXPERTISE",
        'step_4_num': "Étape 4",
        'step_4_lbl': "DEVIS",
        'step_5_num': "Étape 5",
        'step_5_lbl': "SYNTHÈSE",
        
        'step_1_title': "RÉFÉRENCES DU DOSSIER",
        'lbl_ref_dossier': "Réf Dossier",
        'lbl_date_mission': "Date Mission",
        'lbl_requerant': "Requérant (Cie d'Assurances)",
        'lbl_cie': "Cie d'Assurance",
        'lbl_intermediaire': "Intermédiaire",
        'lbl_nom_assure': "Nom de l'Assuré",
        'lbl_tiers': "Tiers responsable (si existant)",
        
        'step_2_title': "IDENTIFICATION DU VÉHICULE",
        'lbl_immatriculation': "Immatriculation",
        'lbl_immat_ww': "Immat. WW",
        'lbl_marque': "Marque",
        'lbl_modele': "Modèle",
        'lbl_type_version': "Type / Version",
        'lbl_chassis': "N° Châssis",
        'lbl_mec': "Mise en Circulation",
        'lbl_puissance': "Puissance fiscale",
        'lbl_genre': "Genre",
        'lbl_carburant': "Carburant",
        'lbl_usage': "Usage",
        
        'step_3_title': "CONDITIONS DE L'EXPERTISE",
        'lbl_date_sinistre': "Date du Sinistre",
        'lbl_date_expertise': "Date d'Expertise",
        'lbl_expert_1': "Nom du 1er Expert",
        'lbl_expert_2': "Nom du 2ème Expert",
        'lbl_lieu_visite': "Lieu de Visite",
        'lbl_reparateur': "Réparateur",
        'lbl_lieu_type': "Type de Garage",
        'lbl_garage_tva': "TVA Garage",
        'lbl_intermediaire_assure': "Intermédiaire Assuré",
        'lbl_nom_tiers': "Nom du Tiers",
        'lbl_veh_tiers': "Véhicule Tiers",
        'lbl_immat_tiers': "Immat. Tiers",
        'lbl_cie_tiers': "Cie Tiers",
        'lbl_police_tiers': "Police Tiers",
        'lbl_ref_sinistre_tiers': "Réf Sinistre Tiers",
        'lbl_intermediaire_tiers': "Intermédiaire Tiers",
        'lbl_choc_principal': "Point de Choc Principal",
        'lbl_calculs_reforme': "Calculs Économiques / Technique",
        'lbl_vv_econ': "Valeur Vénale (Écon.)",
        'lbl_ve_econ': "Valeur Épave (Écon.)",
        'lbl_vv_tech': "Valeur Vénale (Tech.)",
        'lbl_ve_tech': "Valeur Épave (Tech.)",
        'lbl_val_achat': "Valeur d'Achat",
        'lbl_franchise_pct': "Franchise (%)",
        'lbl_franchise_min': "Minimum Franchise",
        'lbl_franchise_calc': "Franchise Calculée",
        'lbl_pj': "Pièces Jointes",
        'lbl_expert_obs': "Observations de l'Expert",
        
        'step_4_title': "DEVIS & CALCULS DE VÉTUSTÉ",
        'lbl_part_category': "Catégorie",
        'lbl_part_name': "Désignation",
        'lbl_part_price': "Prix Unit. HT",
        'lbl_part_qty': "Qté",
        'lbl_part_origin': "Origine de la pièce",
        'lbl_part_depr': "Taux Vétusté (%)",
        'lbl_part_tva_sub': "Pièce soumise à la TVA",
        'btn_add_part': "Ajouter la pièce",
        'btn_update_part': "Modifier la pièce",
        'lbl_detailed_calcs': "Calculs détaillés du Devis",
        'lbl_total_net_ht': "Total Net HT",
        'lbl_total_tva': "Total TVA",
        'lbl_total_net_ttc': "Total Net TTC",
        
        'th_designation': "Désignation",
        'th_source': "Source",
        'th_qty': "Qté",
        'th_price': "P.U HT",
        'th_rate': "Vétusté",
        'th_tva': "TVA",
        'th_total_ttc': "LIGNE TTC",
        'th_actions': "Actions",
        
        'step_5_title': "SYNTHÈSE ET VALIDATION",
        'lbl_grand_total': "Total Général du Rapport",
        'lbl_total_ht_brut': "Total HT Brut",
        'lbl_total_vetuste': "Total Vétusté",
        'lbl_net_ht_vet': "Net HT après Vétusté",
        'lbl_net_ttc_vet': "Net TTC après Vétusté",
        'lbl_applied_franchise': "Franchise appliquée",
        'lbl_net_compagnie': "Net à payer compagnie",
        'lbl_casablanca_on': "Fait à Casablanca, le",
        'lbl_final_obs': "Observations finales",
        'btn_print_report': "Imprimer le Rapport",
        
        'btn_suivant': "Suivant",
        'btn_precedent': "Précédent",
        
        'placeholder_ref_dossier': "N° DOSSIER",
        'placeholder_assure_name': "Nom de l'assuré",
        'placeholder_tiers_name': "Nom du tiers",
        'placeholder_immat': "12345-A-1",
        'placeholder_immat_ww': "WW-12345",
        'placeholder_chassis': "N° DE CHÂSSIS (17 caractères)",
        'placeholder_visite': "Lieu de visite",
        'placeholder_reparateur': "Garage réparateur",
        'placeholder_garage_nom': "Ex: GARAGE X",
        'placeholder_adresse': "Adresse du garage",
        'placeholder_tiers_name_input': "Nom du tiers",
        'placeholder_veh_tiers': "Marque et modèle tiers",
        'placeholder_immat_tiers': "12345-A-1",
        'placeholder_immat_tiers_ww': "WW-12345",
        'placeholder_obs': "Saisir les observations...",
        'placeholder_designation': "Saisir la désignation...",
        'placeholder_price': "0,00",
        'placeholder_obs_final': "Saisir les conclusions...",
        'placeholder_ww_tiers': "WW-12345",
        'placeholder_ww': "WW-12345",
        
        'lbl_orig': "Origine",
        'lbl_adapt': "Adaptable",
        'lbl_recup': "Récupérable",
        'lbl_occas': "Occasion",
        
        'choisir_designation': "-- Choisir une désignation --",
        'autre_saisie_manuelle': "AUTRE (SAISIE MANUELLE)...",
        
        'opt_conventionne': "CONVENTIONNÉ",
        'opt_agree': "AGRÉÉ",
        'opt_autre': "AUTRE",
        'opt_normale': "NORMALE"
    },
    'EN': {
        'nav_new_report': "New Report",
        'nav_claim_type': "Claim Type",
        'label_normal': "Normal",
        'label_contradictory': "Contradictory",
        'label_collegial': "Collegial",
        'label_preliminary': "Preliminary",
        'label_estimated': "Estimated",
        
        'header_title': "FINAL REPORT ATLANTASANAD AND WAFA INSURANCE",
        'expert_manager': "Expert Manager",
        'automobile': "Automobile",
        
        'btn_vider': "Clear",
        'btn_nouveau': "New",
        'btn_test': "Test",
        'btn_pdf': "PDF Preview",
        'btn_excel': "EXCEL",
        
        'step_1_num': "Step 1",
        'step_1_lbl': "DOSSIER",
        'step_2_num': "Step 2",
        'step_2_lbl': "VEHICLE",
        'step_3_num': "Step 3",
        'step_3_lbl': "EXPERTISE",
        'step_4_num': "Step 4",
        'step_4_lbl': "ESTIMATE",
        'step_5_num': "Step 5",
        'step_5_lbl': "SUMMARY",
        
        'step_1_title': "CLAIM FOLDER REFERENCES",
        'lbl_ref_dossier': "File Ref",
        'lbl_date_mission': "Instruction Date",
        'lbl_requerant': "Applicant (Insurance Co)",
        'lbl_cie': "Insurance Company",
        'lbl_intermediaire': "Intermediary / Broker",
        'lbl_nom_assure': "Insured Name",
        'lbl_tiers': "Responsible Third Party (if any)",
        
        'step_2_title': "VEHICLE IDENTIFICATION",
        'lbl_immatriculation': "Registration No.",
        'lbl_immat_ww': "WW Reg. No.",
        'lbl_marque': "Make",
        'lbl_modele': "Model",
        'lbl_type_version': "Type / Version",
        'lbl_chassis': "Chassis No.",
        'lbl_mec': "First Registration Date",
        'lbl_puissance': "Horsepower (HP)",
        'lbl_genre': "Vehicle Category",
        'lbl_carburant': "Fuel Type",
        'lbl_usage': "Usage",
        
        'step_3_title': "EXPERTISE CONDITIONS",
        'lbl_date_sinistre': "Date of Accident",
        'lbl_date_expertise': "Date of Inspection",
        'lbl_expert_1': "1st Expert Name",
        'lbl_expert_2': "2nd Expert Name",
        'lbl_lieu_visite': "Inspection Location",
        'lbl_reparateur': "Repairing Garage",
        'lbl_lieu_type': "Garage Type",
        'lbl_garage_tva': "Garage VAT",
        'lbl_intermediaire_assure': "Insured Broker",
        'lbl_nom_tiers': "Third Party Name",
        'lbl_veh_tiers': "Third Party Vehicle",
        'lbl_immat_tiers': "Third Party Reg.",
        'lbl_cie_tiers': "Third Party Ins. Co.",
        'lbl_police_tiers': "Third Party Policy No.",
        'lbl_ref_sinistre_tiers': "Third Party Claim Ref",
        'lbl_intermediaire_tiers': "Third Party Broker",
        'lbl_choc_principal': "Primary Impact Point",
        'lbl_calculs_reforme': "Economic / Technical Calculations",
        'lbl_vv_econ': "Market Value (Econ.)",
        'lbl_ve_econ': "Salvage Value (Econ.)",
        'lbl_vv_tech': "Market Value (Tech.)",
        'lbl_ve_tech': "Salvage Value (Tech.)",
        'lbl_val_achat': "Purchase Value",
        'lbl_franchise_pct': "Deductible (%)",
        'lbl_franchise_min': "Min Deductible",
        'lbl_franchise_calc': "Calculated Deductible",
        'lbl_pj': "Attachments",
        'lbl_expert_obs': "Expert's Observations",
        
        'step_4_title': "ESTIMATE & DEPRECIATION CALCULATIONS",
        'lbl_part_category': "Category",
        'lbl_part_name': "Part Designation",
        'lbl_part_price': "Unit Price (Ex. Tax)",
        'lbl_part_qty': "Qty",
        'lbl_part_origin': "Part Origin",
        'lbl_part_depr': "Depreciation Rate (%)",
        'lbl_part_tva_sub': "Subject to VAT",
        'btn_add_part': "Add Part",
        'btn_update_part': "Update Part",
        'lbl_detailed_calcs': "Detailed Quote Calculations",
        'lbl_total_net_ht': "Total Net HT",
        'lbl_total_tva': "Total VAT",
        'lbl_total_net_ttc': "Total Net TTC",
        
        'th_designation': "Part Designation",
        'th_source': "Source",
        'th_qty': "Qty",
        'th_price': "Unit Price (HT)",
        'th_rate': "Depreciation",
        'th_tva': "VAT",
        'th_total_ttc': "Line Total (TTC)",
        'th_actions': "Actions",
        
        'step_5_title': "SUMMARY AND VALIDATION",
        'lbl_grand_total': "Report Grand Summary",
        'lbl_total_ht_brut': "Total Gross HT",
        'lbl_total_vetuste': "Total Depreciation",
        'lbl_net_ht_vet': "Net HT after Depreciation",
        'lbl_net_ttc_vet': "Net TTC after Depreciation",
        'lbl_applied_franchise': "Applied Deductible",
        'lbl_net_compagnie': "Net Company Payable",
        'lbl_casablanca_on': "Done at Casablanca, on",
        'lbl_final_obs': "Final Conclusions",
        'btn_print_report': "Print the Report",
        
        'btn_suivant': "Next",
        'btn_precedent': "Previous",
        
        'placeholder_ref_dossier': "CLAIM FILE NO.",
        'placeholder_assure_name': "Insured full name",
        'placeholder_tiers_name': "Third party name",
        'placeholder_immat': "12345-A-1",
        'placeholder_immat_ww': "WW-12345",
        'placeholder_chassis': "CHASSIS NUMBER (17 chars)",
        'placeholder_visite': "Location of visit",
        'placeholder_reparateur': "Repairing workshop",
        'placeholder_garage_nom': "Ex: WORKSHOP X",
        'placeholder_adresse': "Workshop address",
        'placeholder_tiers_name_input': "Third party name",
        'placeholder_veh_tiers': "Third party make/model",
        'placeholder_immat_tiers': "12345-A-1",
        'placeholder_immat_tiers_ww': "WW-12345",
        'placeholder_obs': "Enter expert remarks...",
        'placeholder_designation': "Enter description...",
        'placeholder_price': "0.00",
        'placeholder_obs_final': "Enter final conclusions...",
        'placeholder_ww_tiers': "WW-12345",
        'placeholder_ww': "WW-12345",
        
        'lbl_orig': "OEM (Orig)",
        'lbl_adapt': "Aftermarket",
        'lbl_recup': "Salvage",
        'lbl_occas': "Used",
        
        'choisir_designation': "-- Choose Description --",
        'autre_saisie_manuelle': "OTHER (MANUAL ENTRY)...",
        
        'opt_conventionne': "CONVENTIONAL",
        'opt_agree': "APPROVED",
        'opt_autre': "OTHER",
        'opt_normale': "NORMAL"
    }
};

function translatePartType(type) {
    const map = {
        'CARROSSERIE': 'BODYWORK',
        'MÉCANIQUE (Pièce)': 'MECHANICAL',
        'PIÈCES D\'USURE': 'WEAR PARTS',
        
    };
    return map[type] || type;
}

function translatePartSource(source) {
    if (!source) return "";
    const sLower = source.toLowerCase();
    if (sLower.includes("origine")) return "OEM (Orig)";
    if (sLower.includes("adaptable")) return "Aftermarket";
    if (sLower.includes("récup") || sLower.includes("recup")) return "Salvage";
    if (sLower.includes("occasion")) return "Used";
    return source;
}

function translatePartName(name) {
    if (!name) return "";
    const nameUpper = name.trim().toUpperCase();
    
    const dict = {
        'AIGUILLE DE COMPTEUR': 'SPEEDOMETER NEEDLE',
        'AILE AR DR': 'REAR RIGHT FENDER',
        'AILE AR G': 'REAR LEFT FENDER',
        'AILE ARRIERE DROITE': 'REAR RIGHT FENDER',
        'AILE ARRIERE GAUCHE': 'REAR LEFT FENDER',
        'AILE AV DR': 'FRONT RIGHT FENDER',
        'AILE AV G': 'FRONT LEFT FENDER',
        'AILE AVANT DROITE': 'FRONT RIGHT FENDER',
        'AILE AVANT GAUCHE': 'FRONT LEFT FENDER',
        'AMORTISSEUR DE CHOC': 'SHOCK ABSORBER',
        'ANTENNE': 'ANTENNA',
        'ARMATURE AVANT': 'FRONT FRAME',
        'BAGUETTE DE PORTE': 'DOOR MOLDING',
        'BAS DE CAISSE': 'ROCKER PANEL',
        'BAS DE CAISSE AV DR': 'FRONT RIGHT ROCKER PANEL',
        'BAS DE CAISSE AV G': 'FRONT LEFT ROCKER PANEL',
        'BOUCHON DE RESERVOIR': 'FUEL CAP',
        'BOUCLIER ARRIERE': 'REAR BUMPER GUARD',
        'BOUCLIER AVANT': 'FRONT BUMPER GUARD',
        'CALANDRE': 'GRILLE',
        'CALANDRE AV': 'FRONT GRILLE',
        'CAPOT AV': 'HOOD',
        'CAPOT AVANT': 'HOOD',
        'CHARNIERE DE CAPOT': 'HOOD HINGE',
        'COQUE DE RETROVISEUR': 'MIRROR COVER',
        'DOUBLURE D\'AILE': 'FENDER LINER',
        'ENJOLIVEUR': 'HUB CAP',
        'ENJOLIVEUR DE ROUE': 'WHEEL TRIM',
        'FEU AR DR': 'REAR RIGHT LIGHT',
        'FEU AR G': 'REAR LEFT LIGHT',
        'FEU ARRIERE DROIT': 'REAR RIGHT LIGHT',
        'FEU ARRIERE GAUCHE': 'REAR LEFT LIGHT',
        'GLACE DE RETROVISEUR': 'MIRROR GLASS',
        'GRILLE DE CALANDRE': 'GRILLE MESH',
        'HAILLON ARRIERE': 'TAILGATE',
        'HAYON AR': 'REAR HATCH',
        'JANTE ALLIAGE': 'ALLOY WHEEL',
        'JANTE ALU': 'ALLOY WHEEL',
        'JANTE TOLE': 'STEEL WHEEL',
        'JOINT DE PARE-BRISE': 'WINDSHIELD SEAL',
        'MALLE ARRIERE': 'TRUNK LID',
        'MIROIR DE RETROVISEUR': 'MIRROR GLASS',
        'OPTIQUE AVANT DROIT': 'RIGHT HEADLIGHT',
        'OPTIQUE AVANT GAUCHE': 'LEFT HEADLIGHT',
        'PARE-BRISE AV': 'WINDSHIELD',
        'PARE-BRISE AVANT': 'WINDSHIELD',
        'PARE-CHOC ARRIERE': 'REAR BUMPER',
        'PARE-CHOC AVANT': 'FRONT BUMPER',
        'PARE-CHOCS AR': 'REAR BUMPER',
        'PARE-CHOCS AV': 'FRONT BUMPER',
        'PASSAGE DE ROUE': 'WHEEL ARCH',
        'PHARE ANTIBROUILLARD': 'FOG LIGHT',
        'PHARE AV DR': 'RIGHT HEADLIGHT',
        'PHARE AV G': 'LEFT HEADLIGHT',
        'PLATEAU DE BENNE': 'TRUCK BED',
        'POIGNEE DE PORTE': 'DOOR HANDLE',
        'PORTE AR DR': 'REAR RIGHT DOOR',
        'PORTE AR G': 'REAR LEFT DOOR',
        'PORTE ARRIERE DROITE': 'REAR RIGHT DOOR',
        'PORTE ARRIERE GAUCHE': 'REAR LEFT DOOR',
        'PORTE AV DR': 'FRONT RIGHT DOOR',
        'PORTE AV G': 'FRONT LEFT DOOR',
        'PORTE AVANT DROITE': 'FRONT RIGHT DOOR',
        'PORTE AVANT GAUCHE': 'FRONT LEFT DOOR',
        'REMPLISSAGE DE CARBURANT': 'FUEL FILLER NECK',
        'RETROVISEUR DROIT': 'RIGHT MIRROR',
        'RETROVISEUR GAUCHE': 'LEFT MIRROR',
        'RÉTROVISEUR AV DR': 'RIGHT SIDE MIRROR',
        'RÉTROVISEUR AV G': 'LEFT SIDE MIRROR',
        'SERRURE DE PORTE': 'DOOR LOCK',
        'SPOILER': 'SPOILER',
        'SUPPORT DE PARE-CHOC': 'BUMPER SUPPORT',
        'TRAPPE A ESSENCE': 'FUEL DOOR',
        'TRAVERSE ARRIERE': 'REAR CROSSMEMBER',
        'TRAVERSE AVANT': 'FRONT CROSSMEMBER',
        'VITRE LATERALE': 'SIDE WINDOW',
        'VITRE LATÉRALE': 'SIDE WINDOW',
        
        // Mechanical
        'ALTERNATEUR': 'ALTERNATOR',
        'AMORTISSEUR AR': 'REAR SHOCK ABSORBER',
        'AMORTISSEUR ARRIERE': 'REAR SHOCK ABSORBER',
        'AMORTISSEUR AV': 'FRONT SHOCK ABSORBER',
        'AMORTISSEUR AVANT': 'FRONT SHOCK ABSORBER',
        'BATTERIE': 'BATTERY',
        'BLOC MOTEUR': 'ENGINE BLOCK',
        'BOITE DE VITESSES': 'GEARBOX',
        'BOÎTE VITESSES': 'GEARBOX',
        'BRAS DE SUSPENSION': 'CONTROL ARM',
        'CALCULATEUR MOTEUR ECU': 'ENGINE ECU',
        'CARDAN DR': 'RIGHT DRIVE SHAFT',
        'CARDAN DROIT': 'RIGHT DRIVE SHAFT',
        'CARDAN G': 'LEFT DRIVE SHAFT',
        'CARDAN GAUCHE': 'LEFT DRIVE SHAFT',
        'CATALYSEUR': 'CATALYTIC CONVERTER',
        'COLLECTEUR D\'ECHAPPEMENT': 'EXHAUST MANIFOLD',
        'COMPRESSEUR CLIM': 'A/C COMPRESSOR',
        'COMPRESSEUR DE CLIM': 'A/C COMPRESSOR',
        'CONDENSEUR': 'CONDENSER',
        'COURROIE DISTRIBUTION': 'TIMING BELT',
        'CREMAILLERE DE DIRECTION': 'STEERING RACK',
        'CRÉMAILLÈRE DIRECTION': 'STEERING RACK',
        'CULASSE': 'CYLINDER HEAD',
        'DEMARREUR': 'STARTER',
        'DISQUE DE FREIN DROIT': 'RIGHT BRAKE DISC',
        'DISQUE DE FREIN GAUCHE': 'LEFT BRAKE DISC',
        'DISQUE FREIN AR': 'REAR BRAKE DISC',
        'DISQUE FREIN AV': 'FRONT BRAKE DISC',
        'DÉBITMÈTRE AIR': 'MASS AIRFLOW SENSOR',
        'ECHAPPEMENT COMPLET': 'COMPLETE EXHAUST',
        'EMBRAYAGE COMPLET': 'COMPLETE CLUTCH',
        'ETRIER DE FREIN': 'BRAKE CALIPER',
        'FAISCEAU ELECTRIQUE': 'WIRING HARNESS',
        'FILTRE A AIR': 'AIR FILTER',
        'FILTRE A HUILE': 'OIL FILTER',
        'FILTRE A POLLEN': 'CABIN FILTER',
        'INTERCOOLER': 'INTERCOOLER',
        'KIT EMBRAYAGE': 'CLUTCH KIT',
        'MOTEUR COMPLET': 'COMPLETE ENGINE',
        'MOYEU DE ROUE': 'WHEEL HUB',
        'PLAQUETTES DE FREIN': 'BRAKE PADS',
        'POMPE A EAU': 'WATER PUMP',
        'POMPE A INJECTION': 'INJECTION PUMP',
        'POMPE DE DIRECTION': 'STEERING PUMP',
        'POMPE INJECTION': 'INJECTION PUMP',
        'POMPE À EAU': 'WATER PUMP',
        'RADIATEUR D\'EAU': 'WATER RADIATOR',
        'RADIATEUR DE CLIM': 'A/C RADIATOR',
        'ROLEMENT DE ROUE': 'WHEEL BEARING',
        'SILENCIEUX ARRIERE': 'REAR MUFFLER',
        'SOUPAPE': 'VALVE',
        'SUPPORT MOTEUR': 'ENGINE MOUNT',
        'TURBOCOMPRESSEUR': 'TURBOCHARGER',
        'VENTILATEUR MOTEUR': 'ENGINE FAN',
        'VILEBREQUIN': 'CRANKSHAFT',
        'ÉTRIER FREIN': 'BRAKE CALIPER',
        
        // Wear parts
        'ADBLUE SCR': 'ADBLUE SCR',
        'BALAIS D\'ESSUIE-GLACE': 'WIPER BLADES',
        'COURROIE D\'ACCESSOIRE': 'ACCESSORY BELT',
        'COURROIE DE DISTRIBUTION': 'TIMING BELT',
        'FILTRE AIR': 'AIR FILTER',
        'FILTRE CARBURANT': 'FUEL FILTER',
        'FILTRE HUILE': 'OIL FILTER',
        'HUILE MOTEUR 5W30': 'ENGINE OIL 5W30',
        'HUILE MOTEUR 5W40': 'ENGINE OIL 5W40',
        'KIT DISTRIBUTION': 'TIMING KIT',
        'LIQUIDE DE FREIN': 'BRAKE FLUID',
        'LIQUIDE DE REFROIDISSEMENT': 'COOLANT',
        'LIQUIDE FREIN': 'BRAKE FLUID',
        'LIQUIDE REFROIDISSEMENT': 'COOLANT',
        'PLAQUETTE FREIN AR': 'REAR BRAKE PADS',
        'PLAQUETTE FREIN AV': 'FRONT BRAKE PADS',
        'PNEU': 'TYRE',
        'PNEUMATIQUE ARRIERE': 'REAR TYRE',
        'PNEUMATIQUE AVANT': 'FRONT TYRE',
        'RECHARGE CLIM': 'A/C RECHARGE',
        
        // Labor
        'TÔLERIE': 'BODYWORK',
        'PEINTURE COMPLÈTE': 'COMPLETE PAINTING',
        'RACCORD PEINTURE': 'PAINT RACCORD',
        'REDRESSAGE CHÂSSIS': 'CHASSIS ALIGNMENT',
        'DÉPOSE/POSE MOTEUR': 'ENGINE REMOVAL/INSTALLATION',
        'M.O MÉCANIQUE': 'MECHANICS LABOR',
        'M.O ÉLECTRICITÉ': 'ELECTRICAL LABOR',
        'DIAGNOSTIC ÉLECTRONIQUE': 'ELECTRONIC DIAGNOSIS',
        'PARALLÉLISME / ÉQUILIBRAGE': 'WHEEL ALIGNMENT / BALANCING',
        'CONTRÔLE TECHNIQUE': 'TECHNICAL INSPECTION',
        'REMPLACEMENT PARE-BRISE': 'WINDSHIELD REPLACEMENT'
    };
    return dict[nameUpper] || name;
}

function translatePDFLabel(frText) {
    if (typeof currentLanguage === 'undefined' || currentLanguage !== 'EN') return frText;
    const pdfMap = {
        "RAPPORT PHYSIQUE D'EXPERTISE AUTOMOBILE": "AUTOMOBILE EXPERTISE PHYSICAL REPORT",
        "RAPPORT CONTRADICTOIRE D'EXPERTISE AUTOMOBILE": "AUTOMOBILE EXPERTISE CONTRADICTORY REPORT",
        "RAPPORT D'EXPERTISE COLLÉGIALE": "AUTOMOBILE EXPERTISE COLLÉGIALE REPORT",
        "RAPPORT DE COLLÉGIALE D'EXPERTISE AUTOMOBILE": "AUTOMOBILE EXPERTISE JOINT REPORT",
        "RAPPORT PRÉLIMINAIRE D'EXPERTISE AUTOMOBILE": "AUTOMOBILE EXPERTISE PRELIMINARY REPORT",
        "RAPPORT ESTIMATIF D'EXPERTISE AUTOMOBILE": "AUTOMOBILE EXPERTISE ESTIMATION REPORT",
        
        "NATURE DES TRAVAUX": "NATURE OF WORK",
        "MONTANT HT": "HT AMOUNT",
        "VÉTUSTÉ": "DEPRECIATION",
        "TOTAL TTC": "TOTAL TTC",
        
        "Fournitures pièces": "Spare parts supplies",
        "Main d'œuvre Tôlerie": "Bodywork Labor",
        "Main d'œuvre Peinture": "Painting Labor",
        "Ingrédients Peinture": "Painting Ingredients",
        "Électricité / Autres": "Electricity / Others",
        "Mécanique": "Mechanics",
        
        "TOTAL TRAVAUX": "TOTAL WORK",
        "DÉDUCTION FRANCHISE": "DEDUCTIBLE DEDUCTION",
        "NET À PAYER COMPAGNIE": "NET PAYABLE BY COMPANY",
        
        "ARRÊTÉ LE PRÉSENT RAPPORT À LA SOMME DE :": "WE CONCLUDE THE PRESENT REPORT AT THE SUM OF:",
        "ARRÃŠTÉ LE PRÉSENT RAPPORT À LA SOMME DE :": "WE CONCLUDE THE PRESENT REPORT AT THE SUM OF:",
        
        "VALEUR D'ACHAT": "PURCHASE VALUE",
        "VALEUR VENALE DÉCLARÉE": "DECLARED MARKET VALUE",
        "VALEUR DE L'ÉPAVE": "SALVAGE VALUE",
        "NET À DIRE D'EXPERT": "EXPERT NET VALUATION",
        
        "Le 1er Expert": "The 1st Expert",
        "1er Expert": "1st Expert",
        "Le 2ème Expert": "The 2nd Expert",
        "2ème Expert": "2nd Expert",
        "Expert": "Expert",
        
        "Fait à Casablanca, le": "Done at Casablanca, on",
        "Observations": "Expert Observations",
        "PIÈCES JOINTES": "ATTACHED DOCUMENTS",
        
        "Délai d'immobilisation proposé par l'expert": "Immobilization delay proposed by the expert",
        "Date d'entrée du véhicule au garage": "Vehicle entry date into the garage",
        "Nombre de jours de réparation": "Number of repair days",
        
        "TRAVAUX EN COURS DE RÉPARATION": "REPAIR WORK IN PROGRESS",
        "Date de visite (véhicule démonté)": "Inspection date (dismantled vehicle)",
        "TRAVAUX EN FIN DE RÉPARATION": "REPAIR WORK FINISHED",
        "Date de visite (travaux terminés)": "Inspection date (finished work)",
        
        "PIÈCES DE RECHANGE": "SPARE PARTS",
        "MAIN D'OEUVRE": "LABOR",
        "PEINTURE & INGRÉDIENTS": "PAINT & INGREDIENTS",
        "TOTAL GENERAL H.T": "TOTAL GENERAL H.T",
        "T.V.A (20%)": "V.A.T (20%)",
        "TOTAL GENERAL T.T.C": "TOTAL GENERAL T.T.C",
        "MOINS VÉTUSTÉ APPLIQUÉE": "LESS APPLIED DEPRECIATION",
        "MOINS FRANCHISE": "LESS DEDUCTIBLE",
        "NET DU COMPAGNIE": "NET DUE BY COMPANY",
        "DÛ DU COMPAGNIE": "DUE BY COMPANY",
        "DÛ DE L'ASSURÉ": "DUE BY INSURED",
        "POINT DE CHOC PRINCIPAL": "PRIMARY IMPACT POINT",
        "AGE": "AGE",

        "RAPPORT D'EXPERTISE N° :": "EXPERTISE REPORT N° :",
        "REQUÉRANT :": "APPLICANT :",
        "DATE SINISTRE :": "ACCIDENT DATE :",
        "DATE EXPERTISE :": "INSPECTION DATE :",
        "L'ASSURÉ": "THE INSURED",
        "NOM": "NAME",
        "VÉHICULE": "VEHICLE",
        "MATRICULE": "REGISTRATION NO",
        "WW": "WW",
        "N° CHÂSSIS": "CHASSIS NO",
        "N° DU CHÂSSIS": "CHASSIS NUMBER",
        "N° DU CHÃ‚SSIS": "CHASSIS NUMBER",
        "N° CHÃ‚SSIS": "CHASSIS NO",
        "GARANTIE": "GUARANTEE",
        "CARACTÉRISTIQUES TECHNIQUES DU VÉHICULE": "VEHICLE TECHNICAL SPECIFICATIONS",
        "MARQUE": "MAKE",
        "MODÈLE": "MODEL",
        "TYPE": "TYPE",
        "GENRE": "CATEGORY",
        "ENERGIE": "FUEL",
        "PUISSANCE": "HORSEPOWER",
        "PUISSANCE FISCALE": "HORSEPOWER",
        "KILOMÉTRAGE": "MILEAGE",
        "PNEUS": "TIRES",
        "ÉTAT DU VÉH.": "VEHICLE STATE",
        "DÉTAILS DES VISITES TECHNIQUES EFFECTUÉES": "DETAILS OF PERFORMED INSPECTIONS",
        "TIERS": "THIRD PARTY",
        "CIE TIERS": "THIRD PARTY INS.",
        "POLICE TIERS": "THIRD PARTY POLICY",
        "SINISTRE TIERS": "THIRD PARTY CLAIM",
        "INTERMÉDIAIRE": "BROKER / AGENT",
        "POLICE N°": "POLICY N°",
        "SINISTRE N°": "CLAIM N°",
        "TVA (20%)": "VAT (20%)",
        
        "Données sinistre": "Claim Data",
        "Date rapport :": "Report Date:",
        "Référence :": "Reference:",
        "Procédure :": "Procedure:",
        "Garage :": "Workshop / Garage:",
        "Assuré :": "Insured:",
        "Date sinistre :": "Accident Date:",
        "Ref sinistre :": "Claim Ref:",
        "Police :": "Policy:",
        "Intermédiaire :": "Broker / Intermediary:",
        "Date mission :": "Instruction Date:",
        "Garantie :": "Guarantee:",
        "Franchise :": "Deductible:",
        "Min. Franchise :": "Min Deductible:",
        "Montant Accord TTC :": "Agreement Amount (TTC):",
        "Expertise": "Expertise",
        "Expertise avant :": "Before Inspection:",
        "Expertise en cours :": "During Inspection:",
        "Expertise après :": "After Inspection:",
        
        "Synthèse du rapport": "Report Summary",
        "Fournitures HT :": "Spare Parts HT:",
        "Main d'Œuvre HT :": "Labor HT:",
        "Peinture HT :": "Paint HT:",
        "Total HT :": "Total HT:",
        "TVA :": "VAT:",
        "Total dommages TTC :": "Total Damage TTC:",
        "À déduire :": "To Deduct:",
        "Vétusté appliquée :": "Applied Depreciation:",
        "Franchise appliquée :": "Applied Deductible:",
        "TVA déduite :": "Deducted VAT:",
        "Total Net dommage :": "Total Net Damage:",
        "DÃ» compagnie :": "Due by Company:",
        "Dû compagnie :": "Due by Company:",
        "DÃ» assuré :": "Due by Insured:",
        "Dû assuré :": "Due by Insured:",
        
        "Véhicule assuré": "Insured Vehicle",
        "Immatriculation :": "Registration No:",
        "Marque :": "Make:",
        "Modèle :": "Model:",
        "Genre :": "Category:",
        "Kilométrage :": "Mileage:",
        "Numéro de chassis :": "Chassis Number:",
        "Date MEC :": "First Reg. Date:",
        "Carburant :": "Fuel:",
        "Validité assurance :": "Insurance Validity:",
        "Véhicule adverse": "Third Party Vehicle",
        "Nom :": "Name:",
        "Compagnie :": "Company:",
        "Police :": "Policy:",
        "Véhicule :": "Vehicle:",
        "Validité assurance:": "Insurance Validity:",
        "Point de choc": "Impact Point",
        
        "Répartition CoÃ»ts": "Cost Distribution",
        "Répartition Coûts": "Cost Distribution",
        "MDO": "Labor",
        "Peinture": "Paint",
        "Fourniture": "Spare Parts",
        
        "LE TIERS / ADVERSAIRE": "THE THIRD PARTY / ADVERSARY",
        "ADVERSAIRE": "ADVERSARY",
        "CIE/CABINET": "INS. CO. / AGENT",
        "AGENT": "AGENT / BROKER",
        "ASSURANCE": "INSURANCE",
        "POLICE/SIN": "POLICY / CLAIM",
        
        "Arrêté le présent rapport au montant de": "Certified the present report at the amount of",
        "Observations & Conclusions :": "Observations & Conclusions:"
    };
    return pdfMap[frText] || frText;
}

function initTranslations() {
    const frMap = I18N_DICTS['FR'];
    textNodeRegistry = [];
    
    function traverse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const txt = node.nodeValue.trim();
            if (txt) {
                for (let [key, val] of Object.entries(frMap)) {
                    if (txt === val) {
                        textNodeRegistry.push({
                            node: node,
                            key: key,
                            originalText: txt
                        });
                        break;
                    }
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'SCRIPT' || 
                node.tagName === 'STYLE' || 
                node.tagName === 'TEXTAREA' || 
                node.tagName === 'INPUT' || 
                node.tagName === 'SELECT' || 
                node.id === 'pdf-template-source' || 
                node.id === 'pdf-template-source-b') {
                return;
            }
            for (let child of node.childNodes) {
                traverse(child);
            }
        }
    }
    traverse(document.body);

    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
        const placeholder = el.placeholder.trim();
        for (let [key, val] of Object.entries(frMap)) {
            if (placeholder === val) {
                el.setAttribute('data-i18n-placeholder', key);
                break;
            }
        }
    });
}

function translateSelectOptions(lang) {
    const selects = {
        'part_type': {
            'CARROSSERIE': { 'FR': 'CARROSSERIE', 'EN': 'BODYWORK' },
            'MÉCANIQUE (Pièce)': { 'FR': 'MÉCANIQUE (Pièce)', 'EN': 'MECHANICS' },
            'PIÈCES D\'USURE': { 'FR': 'PIÈCES D\'USURE', 'EN': 'WEAR PARTS' },
            'FOURNITURE DE PEINTURE': { 'FR': 'FOURNITURE DE PEINTURE', 'EN': 'PAINT SUPPLIES' },
            'PLAQUE D\'IMMATRICULATION': { 'FR': 'PLAQUE D\'IMMATRICULATION', 'EN': 'LICENSE PLATE' },
            
        },
        'garage_tva_applicable': {
            'OUI': { 'FR': 'Applicable (20%)', 'EN': 'Applicable (20%)' },
            'NON': { 'FR': 'Non Applicable (0%)', 'EN': 'Not Applicable (0%)' }
        },
        'lieu_reparation_type': {
            'NORMALE': { 'FR': 'NORMALE', 'EN': 'NORMAL' },
            'CONVENTIONNÉ': { 'FR': 'CONVENTIONNÉ', 'EN': 'CONVENTIONAL' },
            'AGRÉÉ': { 'FR': 'AGRÉÉ', 'EN': 'APPROVED' },
            'AUTRE': { 'FR': 'AUTRE', 'EN': 'OTHER' }
        },
        'veh_carburant': {
            'DIESEL': { 'FR': 'DIESEL', 'EN': 'DIESEL' },
            'ESSENCE': { 'FR': 'ESSENCE', 'EN': 'PETROL / GASOLINE' },
            'HYBRIDE': { 'FR': 'HYBRIDE', 'EN': 'HYBRID' },
            'ELECTRIQUE': { 'FR': 'ELECTRIQUE', 'EN': 'ELECTRIC' },
            'GPL': { 'FR': 'GPL', 'EN': 'LPG' }
        },
        'veh_usage': {
            'PERSONNEL': { 'FR': 'PERSONNEL', 'EN': 'PERSONAL' },
            'COMMERCIAL': { 'FR': 'COMMERCIAL', 'EN': 'COMMERCIAL' },
            'TAXI': { 'FR': 'TAXI', 'EN': 'TAXI' },
            'PUBLIC': { 'FR': 'PUBLIC', 'EN': 'PUBLIC' },
            'AGRICOLE': { 'FR': 'AGRICOLE', 'EN': 'AGRICULTURAL' },
            'LEASING': { 'FR': 'LEASING', 'EN': 'LEASING' }
        },
        'veh_genre': {
            'Voiture': { 'FR': 'Voiture', 'EN': 'Voiture (Car)' },
            'C.I': { 'FR': 'C.I (Camionnette)', 'EN': 'C.I (Light Truck)' },
            'Moto': { 'FR': 'Moto', 'EN': 'Moto (Motorcycle)' },
            'Tracteur': { 'FR': 'Tracteur', 'EN': 'Tracteur (Tractor)' },
            'Fourgon': { 'FR': 'Fourgon', 'EN': 'Fourgon (Van)' },
            'Bus': { 'FR': 'Bus', 'EN': 'Bus' },
            'Camion': { 'FR': 'Camion', 'EN': 'Camion (Truck)' }
        }
    };
    
    for (let [selectId, optionsMap] of Object.entries(selects)) {
        const el = document.getElementById(selectId);
        if (!el) continue;
        Array.from(el.options).forEach(opt => {
            const val = opt.value;
            if (optionsMap[val]) {
                opt.text = optionsMap[val][lang];
            }
        });
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('betcam_expert_lang', lang);
    
    const frBtn = document.getElementById('lang_fr_btn');
    const enBtn = document.getElementById('lang_en_btn');
    if (frBtn && enBtn) {
        if (lang === 'EN') {
            frBtn.className = "px-2.5 py-1.5 rounded-lg text-[10px] font-black transition-all duration-200 uppercase text-slate-300 lg:text-slate-600 hover:text-white lg:hover:text-slate-900";
            enBtn.className = "px-2.5 py-1.5 rounded-lg text-[10px] font-black transition-all duration-200 uppercase bg-white text-slate-800 shadow-sm";
        } else {
            frBtn.className = "px-2.5 py-1.5 rounded-lg text-[10px] font-black transition-all duration-200 uppercase bg-white text-slate-800 shadow-sm";
            enBtn.className = "px-2.5 py-1.5 rounded-lg text-[10px] font-black transition-all duration-200 uppercase text-slate-300 lg:text-slate-600 hover:text-white lg:hover:text-slate-900";
        }
    }

    textNodeRegistry.forEach(item => {
        const targetText = I18N_DICTS[lang][item.key];
        if (targetText) {
            item.node.nodeValue = item.node.nodeValue.replace(item.originalText, targetText);
            item.originalText = targetText;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (I18N_DICTS[lang] && I18N_DICTS[lang][key]) {
            el.placeholder = I18N_DICTS[lang][key];
        }
    });
    
    translateSelectOptions(lang);

    if (typeof renderParts === 'function') renderParts();
    if (typeof updatePDFData === 'function') updatePDFData();
}

function translateDOMText(template) {
    const isEN = (typeof currentLanguage !== 'undefined' && currentLanguage === 'EN');
    
    // Custom translations for elements with tags/HTML inside
    const expert1Label = template.querySelector('#pdf_expert_1_label');
    if (expert1Label) {
        if (!expert1Label.getAttribute('data-original-html')) {
            expert1Label.setAttribute('data-original-html', expert1Label.innerHTML);
        }
        expert1Label.innerHTML = isEN ? "1st Expert" : expert1Label.getAttribute('data-original-html');
    }
    
    const expert2Label = template.querySelector('#pdf_expert_2_label');
    if (expert2Label) {
        if (!expert2Label.getAttribute('data-original-html')) {
            expert2Label.setAttribute('data-original-html', expert2Label.innerHTML);
        }
        expert2Label.innerHTML = isEN ? "2nd Expert" : expert2Label.getAttribute('data-original-html');
    }
    
    const mecLabel = template.querySelector('#pdf_mec_label');
    if (mecLabel) {
        if (!mecLabel.getAttribute('data-original-html')) {
            mecLabel.setAttribute('data-original-html', mecLabel.innerHTML);
        }
        mecLabel.innerHTML = isEN ? "1st Reg. Date" : mecLabel.getAttribute('data-original-html');
    }
    
    function traverse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const cleanText = node.nodeValue.trim();
            if (cleanText) {
                const parent = node.parentNode;
                if (parent && parent.nodeType === Node.ELEMENT_NODE) {
                    let original = parent.getAttribute('data-original-text');
                    if (!original) {
                        original = cleanText;
                        parent.setAttribute('data-original-text', original);
                    }
                    
                    if (isEN) {
                        const translated = translatePDFLabel(original);
                        node.nodeValue = node.nodeValue.replace(cleanText, translated);
                    } else {
                        node.nodeValue = node.nodeValue.replace(cleanText, original);
                    }
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.classList.contains('pdf_ref') || 
                node.classList.contains('pdf_date') || 
                node.classList.contains('pdf_requerant') || 
                node.classList.contains('pdf_assure') || 
                node.classList.contains('pdf_cie') || 
                node.classList.contains('pdf_expert_1') || 
                node.classList.contains('pdf_expert_2') || 
                node.classList.contains('pdf_marque') || 
                node.classList.contains('pdf_model') || 
                node.classList.contains('pdf_immat') || 
                node.classList.contains('pdf_chassis') ||
                node.id === 'pdf_pieces_jointes_list' ||
                node.id === 'pdf_expert_1_label' ||
                node.id === 'pdf_expert_2_label' ||
                node.id === 'pdf_mec_label') {
                return;
            }
            for (let child of node.childNodes) {
                traverse(child);
            }
        }
    }
    traverse(template);
}

function numberToEnglish(number) {
    number = Math.floor(number);
    if (number === 0) return "zero";
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    function convert(n) {
        if (n < 10) return units[n];
        if (n >= 10 && n < 20) return teens[n - 10];
        if (n < 100) {
            let t = Math.floor(n / 10);
            let u = n % 10;
            return tens[t] + (u > 0 ? "-" + units[u] : "");
        }
        if (n < 1000) {
            let c = Math.floor(n / 100);
            let r = n % 100;
            let s = units[c] + " hundred";
            if (r === 0) return s;
            return s + " and " + convert(r);
        }
        if (n < 1000000) {
            let m = Math.floor(n / 1000);
            let r = n % 1000;
            let s = convert(m) + " thousand";
            if (r === 0) return s;
            return s + " " + convert(r);
        }
        return String(n);
    }
    return convert(number) + " dirhams";
}



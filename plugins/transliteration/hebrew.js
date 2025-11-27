// node_modules/havarotjs/dist/esm/utils/charMap.js
var taamimCharToNameMap = {
  "\u0591": "ETNAHTA",
  "\u0592": "SEGOL_ACCENT",
  "\u0593": "SHALSHELET",
  "\u0594": "ZAQEF_QATAN",
  "\u0595": "ZAQEF_GADOL",
  "\u0596": "TIPEHA",
  "\u0597": "REVIA",
  "\u0598": "ZARQA",
  "\u0599": "PASHTA",
  "\u059A": "YETIV",
  "\u059B": "TEVIR",
  "\u059C": "GERESH",
  "\u059D": "GERESH_MUQDAM",
  "\u059E": "GERSHAYIM",
  "\u059F": "QARNEY_PARA",
  "\u05A0": "TELISHA_GEDOLA",
  "\u05A1": "PAZER",
  "\u05A2": "ATNAH_HAFUKH",
  "\u05A3": "MUNAH",
  "\u05A4": "MAHAPAKH",
  "\u05A5": "MERKHA",
  "\u05A6": "MERKHA_KEFULA",
  "\u05A7": "DARGA",
  "\u05A8": "QADMA",
  "\u05A9": "TELISHA_QETANA",
  "\u05AA": "YERAH_BEN_YOMO",
  "\u05AB": "OLE",
  "\u05AC": "ILUY",
  "\u05AD": "DEHI",
  "\u05AE": "ZINOR"
};
var isCharTaam = (char) => {
  return char in taamimCharToNameMap;
};
var taamimNameToCharMap = {
  ETNAHTA: "\u0591",
  SEGOL_ACCENT: "\u0592",
  SHALSHELET: "\u0593",
  ZAQEF_QATAN: "\u0594",
  ZAQEF_GADOL: "\u0595",
  TIPEHA: "\u0596",
  REVIA: "\u0597",
  ZARQA: "\u0598",
  PASHTA: "\u0599",
  YETIV: "\u059A",
  TEVIR: "\u059B",
  GERESH: "\u059C",
  GERESH_MUQDAM: "\u059D",
  GERSHAYIM: "\u059E",
  QARNEY_PARA: "\u059F",
  TELISHA_GEDOLA: "\u05A0",
  PAZER: "\u05A1",
  ATNAH_HAFUKH: "\u05A2",
  MUNAH: "\u05A3",
  MAHAPAKH: "\u05A4",
  MERKHA: "\u05A5",
  MERKHA_KEFULA: "\u05A6",
  DARGA: "\u05A7",
  QADMA: "\u05A8",
  TELISHA_QETANA: "\u05A9",
  YERAH_BEN_YOMO: "\u05AA",
  OLE: "\u05AB",
  ILUY: "\u05AC",
  DEHI: "\u05AD",
  ZINOR: "\u05AE"
};
var vowelCharToNameMap = {
  "\u05B1": "HATAF_SEGOL",
  "\u05B2": "HATAF_PATAH",
  "\u05B3": "HATAF_QAMATS",
  "\u05B4": "HIRIQ",
  "\u05B5": "TSERE",
  "\u05B6": "SEGOL",
  "\u05B7": "PATAH",
  "\u05B8": "QAMATS",
  "\u05B9": "HOLAM",
  "\u05BA": "HOLAM_HASER",
  "\u05BB": "QUBUTS",
  "\u05C7": "QAMATS_QATAN"
};
var isCharVowel = (char) => {
  return char in vowelCharToNameMap;
};
var vowelNameToCharMap = {
  HATAF_SEGOL: "\u05B1",
  HATAF_PATAH: "\u05B2",
  HATAF_QAMATS: "\u05B3",
  HIRIQ: "\u05B4",
  TSERE: "\u05B5",
  SEGOL: "\u05B6",
  PATAH: "\u05B7",
  QAMATS: "\u05B8",
  HOLAM: "\u05B9",
  HOLAM_HASER: "\u05BA",
  QUBUTS: "\u05BB",
  QAMATS_QATAN: "\u05C7"
};
var consonantCharToNameMap = {
  "\u05D0": "ALEF",
  "\u05D1": "BET",
  "\u05D2": "GIMEL",
  "\u05D3": "DALET",
  "\u05D4": "HE",
  "\u05D5": "VAV",
  "\u05D6": "ZAYIN",
  "\u05D7": "HET",
  "\u05D8": "TET",
  "\u05D9": "YOD",
  "\u05DA": "FINAL_KAF",
  "\u05DB": "KAF",
  "\u05DC": "LAMED",
  "\u05DD": "FINAL_MEM",
  "\u05DE": "MEM",
  "\u05DF": "FINAL_NUN",
  "\u05E0": "NUN",
  "\u05E1": "SAMEKH",
  "\u05E2": "AYIN",
  "\u05E3": "FINAL_PE",
  "\u05E4": "PE",
  "\u05E5": "FINAL_TSADI",
  "\u05E6": "TSADI",
  "\u05E7": "QOF",
  "\u05E8": "RESH",
  "\u05E9": "SHIN",
  "\u05EA": "TAV"
};
var isCharConsonant = (char) => {
  return char in consonantCharToNameMap;
};
var consonantNameToCharMap = {
  ALEF: "\u05D0",
  BET: "\u05D1",
  GIMEL: "\u05D2",
  DALET: "\u05D3",
  HE: "\u05D4",
  VAV: "\u05D5",
  ZAYIN: "\u05D6",
  HET: "\u05D7",
  TET: "\u05D8",
  YOD: "\u05D9",
  FINAL_KAF: "\u05DA",
  KAF: "\u05DB",
  LAMED: "\u05DC",
  FINAL_MEM: "\u05DD",
  MEM: "\u05DE",
  FINAL_NUN: "\u05DF",
  NUN: "\u05E0",
  SAMEKH: "\u05E1",
  AYIN: "\u05E2",
  FINAL_PE: "\u05E3",
  PE: "\u05E4",
  FINAL_TSADI: "\u05E5",
  TSADI: "\u05E6",
  QOF: "\u05E7",
  RESH: "\u05E8",
  SHIN: "\u05E9",
  TAV: "\u05EA"
};
var charToNameMap = {
  ...taamimCharToNameMap,
  ...vowelCharToNameMap,
  ...consonantCharToNameMap,
  // ------
  // SHEVA
  // ------
  "\u05B0": "SHEVA",
  // ------
  // DAGESH & RAFE
  // ------
  "\u05BC": "DAGESH",
  "\u05BF": "RAFE",
  // ------
  // PUNCTUATION
  // ------
  "\u05BE": "MAQAF",
  "\u05C0": "PASEQ",
  "\u05C3": "SOF_PASUQ",
  "\u05C6": "NUN_HAFUKHA",
  "\u05F3": "GERESH_PUNCTUATION",
  "\u05F4": "GERSHAYIM_PUNCTUATION",
  // ------
  // LIGATURES
  // ------
  "\u05C1": "SHIN_DOT",
  "\u05C2": "SIN_DOT",
  // ------
  // MARKS
  // ------
  "\u05AF": "MASORA_CIRCLE",
  "\u05C4": "UPPER_DOT",
  "\u05C5": "LOWER_DOT",
  // ------
  // YOD TRIANGLE
  // ------
  "\u05EF": "YOD_TRIANGLE",
  // ------
  // YIDDISH
  // ------
  "\u05F0": "DOUBLE_VAV",
  "\u05F1": "VAV_YOD",
  "\u05F2": "DOUBLE_YOD"
};
var isHebrewCharacter = (char) => {
  return char in charToNameMap;
};
var nameToCharMap = {
  ...taamimNameToCharMap,
  ...vowelNameToCharMap,
  ...consonantNameToCharMap,
  // ------
  // SHEVA
  // ------
  SHEVA: "\u05B0",
  // ------
  // DAGESH & RAFE
  // ------
  DAGESH: "\u05BC",
  RAFE: "\u05BF",
  // ------
  // PUNCTUATION
  // ------
  MAQAF: "\u05BE",
  PASEQ: "\u05C0",
  SOF_PASUQ: "\u05C3",
  NUN_HAFUKHA: "\u05C6",
  GERESH_PUNCTUATION: "\u05F3",
  GERSHAYIM_PUNCTUATION: "\u05F4",
  // ------
  // LIGATURES
  // ------
  SHIN_DOT: "\u05C1",
  SIN_DOT: "\u05C2",
  // ------
  // MARKS
  // ------
  MASORA_CIRCLE: "\u05AF",
  UPPER_DOT: "\u05C4",
  LOWER_DOT: "\u05C5",
  // ------
  // YOD TRIANGLE
  // ------
  YOD_TRIANGLE: "\u05EF",
  // ------
  // YIDDISH
  // ------
  DOUBLE_VAV: "\u05F0",
  VAV_YOD: "\u05F1",
  DOUBLE_YOD: "\u05F2"
};

// node_modules/havarotjs/dist/esm/utils/regularExpressions.js
var clusterSplitGroup = /(?=[\u{05BE}\u{05C3}\u{05C6}\u{05D0}-\u{05F2}\u{2000}-\u{206F}\u{2E00}-\u{2E7F}'!"#$%&()*+,-./:;<=>?@[\]^_`{|}~])/u;
var consonants = /[\u{05D0}-\u{05F2}]/u;
var dagesh = /[\u{05BC}]/u;
var hebChars = /[\u{0590}-\u{05FF}\u{FB1D}-\u{FB4F}]/u;
var ligatures = /[\u{05C1}-\u{05C2}]/u;
var meteg = /\u{05BD}/u;
var punctuation = /[\u{05BE}\u{05C0}\u{05C3}\u{05C6}]/u;
var rafe = /\u{05BF}/u;
var splitGroup = /(\S*\u{05BE}(?=\S*\u{05BE})|\S*\u{05BE}(?!\S*\u{05BE})|\S*-(?!\S*-)|\S*-(?=\S*-)|\S*\s*)/u;
var sheva = /\u{05B0}/u;
var taamim = /[\u{0591}-\u{05AE}]/u;
var taamimCaptureGroup = /([\u{0591}-\u{05AE}])/gu;
var vowels = /[\u{05B1}-\u{05BB}\u{05C7}]/u;
var jerusalemTest = new RegExp(`(?<vowel>[\u05B8\u05B7])(?<hiriq>\u05B4)(?<taamimMatch>${taamim.source}|\u05BD)(?<mem>\u05DD.*)$`, "u");

// node_modules/havarotjs/dist/esm/char.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Char_instances;
var _a;
var _Char_text;
var _Char_cluster;
var _Char_sequencePosition;
var _Char_isCharKeyOfCharToNameMap;
var _Char_findPos;
var _Char_consonants_get;
var _Char_dagesh_get;
var _Char_ligatures_get;
var _Char_meteg_get;
var _Char_rafe_get;
var _Char_sheva_get;
var _Char_taamim_get;
var _Char_vowels_get;
var Char = class {
  constructor(char) {
    _Char_instances.add(this);
    _Char_text.set(this, void 0);
    _Char_cluster.set(this, null);
    _Char_sequencePosition.set(this, void 0);
    _Char_isCharKeyOfCharToNameMap.set(this, isHebrewCharacter);
    __classPrivateFieldSet(this, _Char_text, char, "f");
    __classPrivateFieldSet(this, _Char_sequencePosition, __classPrivateFieldGet(this, _Char_instances, "m", _Char_findPos).call(this), "f");
  }
  /**
   * The parent `Cluster` of the character, if any.
   *
   * @example
   * ```ts
   * const text = new Text("דָּבָר");
   * const firstChar = text.chars[0];
   * firstChar.text;
   * // "ד"
   * firstChar.cluster?.text;
   * // "דָּ"
   * ```
   */
  get cluster() {
    return __classPrivateFieldGet(this, _Char_cluster, "f");
  }
  set cluster(cluster) {
    __classPrivateFieldSet(this, _Char_cluster, cluster, "f");
  }
  /**
   * Returns `true` if the character is a character name
   *
   * @param name a character name
   */
  isCharacterName(name) {
    if (!nameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    const match = __classPrivateFieldGet(this, _Char_text, "f").match(nameToCharMap[name]);
    return !!match;
  }
  /**
   * Returns `true` if the character is a consonant
   *
   * @example
   * ```ts
   * const text = new Text("אֱלֹהִ֑ים");
   * text.chars[0].isConsonant;
   * // true
   * ```
   */
  get isConsonant() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_consonants_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is a ligature
   *
   * @example
   * ```ts
   * const text = new Text("שָׁלֽוֹם");
   * text.chars[1].isLigature;
   * // true
   * ```
   */
  get isLigature() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_ligatures_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is a dagesh
   *
   * @example
   * ```ts
   * const text = new Text("בּ");
   * text.chars[1].isDagesh;
   * // true
   * ```
   */
  get isDagesh() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_dagesh_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is a rafe
   *
   * @example
   * ```ts
   * const text = new Text("בֿ");
   * text.chars[1].isRafe;
   * // true
   * ```
   */
  get isRafe() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_rafe_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is a sheva
   *
   * @example
   * ```ts
   * const text = new Text("בְ");
   * text.chars[1].isSheva;
   * // true
   * ```
   */
  get isSheva() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_sheva_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is a sheva
   *
   * @example
   * ```ts
   * const text = new Text("בֺ");
   * text.chars[1].isVowel;
   * // true
   * ```
   */
  get isVowel() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_vowels_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is a taamim
   *
   * @example
   * ```ts
   * const text = new Text("בֺ֨");
   * text.chars[2].isTaamim;
   * // true
   * ```
   */
  get isTaamim() {
    return __classPrivateFieldGet(_a, _a, "a", _Char_taamim_get).test(__classPrivateFieldGet(this, _Char_text, "f"));
  }
  /**
   * Returns `true` if the character is not a Hebrew character
   *
   * @example
   * ```ts
   * const text = new Text("a");
   * text.chars[0].isNotHebrew;
   * // true
   * ```
   */
  get isNotHebrew() {
    return this.sequencePosition === 10;
  }
  /**
   * Returns the name of the character
   *
   * @example
   * ```ts
   * const text = new Text("אֱלֹהִ֑ים");
   * text.chars[0].characterName;
   * // "ALEF"
   * ```
   */
  get characterName() {
    const text = __classPrivateFieldGet(this, _Char_text, "f");
    if (__classPrivateFieldGet(this, _Char_isCharKeyOfCharToNameMap, "f").call(this, text)) {
      return charToNameMap[text];
    }
    return null;
  }
  /**
   * Gets the sequence position of the character
   *
   * @returns a number used for sequencing
   * - consonants = 0
   * - ligatures = 1
   * - dagesh or rafe = 2
   * - niqqud (i.e vowels) = 3
   * - taamim (i.e. accents) = 4
   *
   * @example
   * ```ts
   * const text = new Text("אֱלֹהִ֑ים");
   * text.chars[0].sequencePosition; // the aleph
   * // 0
   * text.chars[1].sequencePosition; // the segol
   * // 3
   * ```
   */
  get sequencePosition() {
    return __classPrivateFieldGet(this, _Char_sequencePosition, "f");
  }
  /**
   * The text of the character
   *
   * @returns the text of the Char
   *
   * @example
   * ```ts
   * const text = new Text("אֱלֹהִ֑ים");
   * text.chars[0].text;
   * // "א"
   * ```
   */
  get text() {
    return __classPrivateFieldGet(this, _Char_text, "f");
  }
};
_a = Char, _Char_text = /* @__PURE__ */ new WeakMap(), _Char_cluster = /* @__PURE__ */ new WeakMap(), _Char_sequencePosition = /* @__PURE__ */ new WeakMap(), _Char_isCharKeyOfCharToNameMap = /* @__PURE__ */ new WeakMap(), _Char_instances = /* @__PURE__ */ new WeakSet(), _Char_findPos = function _Char_findPos2() {
  const char = this.text;
  if (__classPrivateFieldGet(_a, _a, "a", _Char_consonants_get).test(char)) {
    return 0;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_ligatures_get).test(char)) {
    return 1;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_dagesh_get).test(char)) {
    return 2;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_rafe_get).test(char)) {
    return 2;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_vowels_get).test(char)) {
    return 3;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_sheva_get).test(char)) {
    return 3;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_taamim_get).test(char)) {
    return 4;
  }
  if (__classPrivateFieldGet(_a, _a, "a", _Char_meteg_get).test(char)) {
    return 4;
  }
  return 10;
}, _Char_consonants_get = function _Char_consonants_get2() {
  return consonants;
}, _Char_dagesh_get = function _Char_dagesh_get2() {
  return dagesh;
}, _Char_ligatures_get = function _Char_ligatures_get2() {
  return ligatures;
}, _Char_meteg_get = function _Char_meteg_get2() {
  return meteg;
}, _Char_rafe_get = function _Char_rafe_get2() {
  return rafe;
}, _Char_sheva_get = function _Char_sheva_get2() {
  return sheva;
}, _Char_taamim_get = function _Char_taamim_get2() {
  return taamim;
}, _Char_vowels_get = function _Char_vowels_get2() {
  return vowels;
};

// node_modules/havarotjs/dist/esm/node.js
var Node = class {
  /**
   * Creates a new Node instance.
   * Initializes value, next, and prev properties to null.
   */
  constructor() {
    this.value = null;
    this.next = null;
    this.prev = null;
  }
  /**
   * Sets the children of this node.
   * The first element becomes the child, and the rest become siblings of the child.
   * @param arr - An array of Node<T> to set as children.
   */
  set children(arr) {
    const head = arr[0];
    const remainder = arr.slice(1);
    this.child = head;
    head.siblings = remainder;
  }
  /**
   * Sets the siblings of this node.
   * Establishes bidirectional links between adjacent nodes in the provided array.
   * @param arr - An array of Node<T> to set as siblings.
   */
  set siblings(arr) {
    const len = arr.length;
    for (let index = 0; index < len; index++) {
      const curr = arr[index];
      const nxt = arr[index + 1] || null;
      const prv = arr[index - 1] || this;
      curr.prev = prv;
      prv.next = curr;
      curr.next = nxt;
    }
  }
  /**
   * Gets the siblings of this node.
   * @returns An array of Node<T> representing all subsequent nodes in the sequence.
   */
  get siblings() {
    let curr = this.next;
    const res = [];
    while (curr) {
      res.push(curr);
      curr = curr.next;
    }
    return res;
  }
};

// node_modules/havarotjs/dist/esm/cluster.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cluster_instances;
var _a2;
var _Cluster_consonantsCache;
var _Cluster_consonantNameCache;
var _Cluster_original;
var _Cluster_sequenced;
var _Cluster_syllable;
var _Cluster_taamimCache;
var _Cluster_vowelsCache;
var _Cluster_vowelNamesCache;
var _Cluster_taamimNamesCache;
var _Cluster_isCharConsonant;
var _Cluster_isCharTaam;
var _Cluster_isCharVowel;
var _Cluster_sequence;
var _Cluster_hasMetegCharacter_get;
var _Cluster_meteg_get;
var Cluster = class extends Node {
  /**
   * Creates a new cluster
   *
   * @param cluster - the original cluster
   * @param noSequence - whether to sequence the cluster
   *
   * @example
   * ```ts
   * const str = "הָ";
   * const cluster = new Cluster(str);
   * cluster.text;
   * // "הָ"
   * ```
   */
  constructor(cluster, noSequence = false) {
    super();
    _Cluster_instances.add(this);
    _Cluster_consonantsCache.set(this, null);
    _Cluster_consonantNameCache.set(this, null);
    _Cluster_original.set(this, void 0);
    _Cluster_sequenced.set(this, void 0);
    _Cluster_syllable.set(this, null);
    _Cluster_taamimCache.set(this, null);
    _Cluster_vowelsCache.set(this, null);
    _Cluster_vowelNamesCache.set(this, null);
    _Cluster_taamimNamesCache.set(this, null);
    _Cluster_isCharConsonant.set(this, isCharConsonant);
    _Cluster_isCharTaam.set(this, isCharTaam);
    _Cluster_isCharVowel.set(this, isCharVowel);
    this.value = this;
    __classPrivateFieldSet2(this, _Cluster_original, cluster, "f");
    __classPrivateFieldSet2(this, _Cluster_sequenced, __classPrivateFieldGet2(this, _Cluster_instances, "m", _Cluster_sequence).call(this, noSequence), "f");
    __classPrivateFieldGet2(this, _Cluster_sequenced, "f").forEach((char) => char.cluster = this);
  }
  /**
   * Gets all the {@link Char | characters} in the cluster
   *
   * @returns an array of sequenced Char objects
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].chars;
   * // [
   * //  Char { original: "ה" },
   * //  Char { original: "ֲ " },   i.e. \u{05B2} (does not print well)
   * // ]
   * ```
   */
  get chars() {
    return __classPrivateFieldGet2(this, _Cluster_sequenced, "f");
  }
  /**
   * Gets all the consonant characters in the cluster
   *
   * @returns an array of the consonant characters in the cluster
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].consonants;
   * // ["ה"]
   * ```
   *
   * @warning
   * This can only every return one consonant, as a `Cluster` is defined by having only one consonant.
   * Though it is impossible to have two consonants in a cluster, this api is meant for consistency with `vowels` and `taamim`
   */
  get consonants() {
    if (__classPrivateFieldGet2(this, _Cluster_consonantsCache, "f")) {
      return __classPrivateFieldGet2(this, _Cluster_consonantsCache, "f");
    }
    const consonants2 = this.chars.reduce((a, char) => {
      const text = char.text;
      if (char.isConsonant && __classPrivateFieldGet2(this, _Cluster_isCharConsonant, "f").call(this, text)) {
        a.push(text);
      }
      return a;
    }, []);
    return __classPrivateFieldSet2(this, _Cluster_consonantsCache, consonants2, "f");
  }
  /**
   * Gets all consonant names in the cluster.
   *
   * @returns an array of the consonant names in the cluster
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].consonantNames;
   * // ["HE"]
   * ```
   *
   * @warning
   * This can only every return one consonant, as a `Cluster` is defined by having only one consonant.
   * Though it is impossible to have two consonants in a cluster, this api is meant for consistency with `vowelNames` and `taamimNames`
   */
  get consonantNames() {
    if (__classPrivateFieldGet2(this, _Cluster_consonantNameCache, "f")) {
      return __classPrivateFieldGet2(this, _Cluster_consonantNameCache, "f");
    }
    const consonantNames = this.chars.reduce((a, char) => {
      const text = char.text;
      if (char.isConsonant && __classPrivateFieldGet2(this, _Cluster_isCharConsonant, "f").call(this, text)) {
        a.push(charToNameMap[text]);
      }
      return a;
    }, []);
    return __classPrivateFieldSet2(this, _Cluster_consonantNameCache, consonantNames, "f");
  }
  /**
   * Checks if the cluster contains the consonant character of the name passed in
   *
   * @returns a boolean indicating if the cluster contains the consonant character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].hasConsonantName("HE");
   * // true
   * text.clusters[0].hasConsonantName("BET");
   * // false
   * ```
   */
  hasConsonantName(name) {
    if (!consonantNameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    return this.consonantNames.includes(name);
  }
  /**
   * Checks if the cluster contains a half-vowel
   *
   * @returns a boolean indicating if the cluster contains a half-vowel
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].hasHalfVowel;
   * // true
   * text.clusters[1].hasHalfVowel;
   * // false
   * ```
   *
   * @description
   * The following characters are considered half-vowels:
   * - \u{05B1} HATAF SEGOL
   * - \u{05B2} HATAF PATAH
   * - \u{05B3} HATAF QAMATS
   */
  get hasHalfVowel() {
    return /[\u{05B1}-\u{05B3}]/u.test(this.text);
  }
  /**
   * Checks if the cluster contains a long vowel
   *
   * @returns a boolean indicating if the cluster contains a long vowel
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].hasLongVowel;
   * // false
   * text.clusters[1].hasLongVowel;
   * // true
   * ```
   *
   * @description
   * The following characters are considered long vowels:
   * - \u{05B5} TSERE
   * - \u{05B8} QAMATS
   * - \u{05B9} HOLAM
   * - \u{05BA} HOLAM HASER FOR VAV
   */
  get hasLongVowel() {
    return /[\u{05B5}\u{05B8}\u{05B9}\u{05BA}]/u.test(this.text);
  }
  /**
   * Checks if the cluster contains a _meteg_
   *
   * @returns a boolean indicating if the cluster contains a _meteg_
   *
   * @deprecated use `hasMeteg`
   *
   * @example
   * ```ts
   * const text = new Text("נַפְשִֽׁי׃");
   * text.clusters[2].hasMetheg;
   * // true
   * ```
   *
   * @description
   * Checks if the following character is present and a _sof pasuq_ does not follow it:
   * - \u{05BD} METEG
   */
  get hasMetheg() {
    return this.hasMeteg;
  }
  /**
   * Checks if the cluster contains a _meteg_
   *
   * @returns a boolean indicating if the cluster contains a _meteg_
   *
   * ```ts
   * const text = new Text("נַפְשִֽׁי׃");
   * text.clusters[2].hasMetheg;
   * // true
   * ```
   *
   * @description
   * Checks if the following character is present and a _sof pasuq_ does not follow it:
   * - \u{05BD} METEG
   */
  get hasMeteg() {
    if (!__classPrivateFieldGet2(this, _Cluster_instances, "a", _Cluster_hasMetegCharacter_get)) {
      return false;
    }
    let next = this.next;
    while (next) {
      if (next instanceof _a2) {
        const nextText = next.text;
        const sofPassuq = /\u{05C3}/u;
        if (__classPrivateFieldGet2(_a2, _a2, "a", _Cluster_meteg_get).test(nextText)) {
          return true;
        }
        if (sofPassuq.test(nextText)) {
          return false;
        }
        next = next.next;
      }
    }
    return true;
  }
  /**
   * Checks if the cluster contains a sheva
   *
   * @returns a boolean indicating if the cluster contains a sheva
   *
   * @example
   * ```ts
   * const text = new Text("מַלְכָּה");
   * text.clusters[0].hasSheva;
   * // false
   * text.clusters[1].hasSheva;
   * // true
   * ```
   *
   * @description
   * Checks if the following character is present:
   * - \u{05B0} SHEVA
   */
  get hasSheva() {
    return /\u{05B0}/u.test(this.text);
  }
  /**
   * Checks if the cluster contains a sheva
   *
   * @returns a boolean indicating if the cluster contains a sheva
   *
   * @deprecated now use `hasSheva`
   *
   * @example
   * ```ts
   * const text = new Text("מַלְכָּה");
   * text.clusters[0].hasSheva;
   * // false
   * text.clusters[1].hasSheva;
   * // true
   * ```
   *
   * @description
   * Checks if the following character is present:
   * - \u{05B0} SHEVA
   */
  get hasShewa() {
    return this.hasSheva;
  }
  /**
   * Checks if the cluster contains a short vowel
   *
   * @returns a boolean indicating if the cluster contains a short vowel
   *
   * @example
   * ```ts
   * const text = new Text("מַלְכָּה");
   * text.clusters[0].hasShortVowel;
   * // true
   * text.clusters[2].hasShortVowel;
   * // false
   * ```
   *
   * @description
   * The following characters are considered short vowels:
   * - \u{05B4} HIRIQ
   * - \u{05B6} SEGOL
   * - \u{05B7} PATAH
   * - \u{05BB} QUBUTS
   * - \u{05C7} QAMATS QATAN
   */
  get hasShortVowel() {
    return /[\u{05B4}\u{05B6}\u{05B7}\u{05BB}\u{05C7}]/u.test(this.text);
  }
  /**
   * Checks if the cluster contains a _silluq_
   *
   * @returns a boolean indicating if the cluster contains a _silluq_
   *
   * @example
   * ```ts
   * const text = new Text("הָאָֽרֶץ׃");
   * text.clusters[2].hasSilluq;
   * // true
   * ```
   *
   * @description
   * Checks if the following character is present and a _sof pasuq_ follows it:
   * - \u{05BD} METEG
   */
  get hasSilluq() {
    if (__classPrivateFieldGet2(this, _Cluster_instances, "a", _Cluster_hasMetegCharacter_get) && !this.hasMeteg) {
      return true;
    }
    return false;
  }
  /**
   * Checks if the cluster contains a taamim character
   *
   * @returns a boolean indicating if the cluster contains a taamim character
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.clusters[0].hasTaamName("TIPEHA");
   * // true
   * ```
   *
   * @description
   * Note: it only checks according to the character name, not its semantic meaning.
   * E.g. "כֵֽן׃" would be `true` when checking for `"METEG"`, not silluq
   */
  hasTaamName(name) {
    if (!taamimNameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    return this.taamimNames.includes(name);
  }
  /**
   * Checks if the cluster contains a taamim character
   *
   * @returns a boolean indicating if the cluster contains a taamim character
   *
   * @example
   * ```ts
   * const text = new Text("אֱלֹהִ֑ים");
   * text.clusters[0].hasTaamim;
   * // false
   * text.clusters[2].hasTaamim;
   * // true
   * ```
   *
   * @description
   * The following characters are considered taamim:
   * - \u{0591}-\u{05AF}\u{05BF}\u{05C0}\u{05C3}-\u{05C6}\u{05F3}\u{05F4}
   */
  get hasTaamim() {
    return taamim.test(this.text);
  }
  /**
   * Checks if the cluster contains any vowel character
   *
   * @returns a boolean indicating if the cluster contains any vowel character
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.clusters[0].hasVowel;
   * // true
   * text.clusters[4].hasVowel;
   * // false
   * ```
   *
   * @description
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Because `Cluster` is concerned with orthography, a sheva is **not** a vowel character.
   */
  get hasVowel() {
    return this.hasLongVowel || this.hasShortVowel || this.hasHalfVowel;
  }
  /**
   * Checks if the cluster contains the vowel character of the name passed in
   *
   * @returns a boolean indicating if the cluster contains the vowel character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הַיְחָבְרְךָ");
   * text.clusters[0].hasVowelName("PATAH");
   * // true
   * text.clusters[0].hasVowelName("HIRIQ");
   * // false
   * ```
   *
   * @description
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Because `Cluster` is concerned with orthography, a sheva is **not** a vowel character.
   */
  hasVowelName(name) {
    if (!vowelNameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    return this.vowelNames.includes(name);
  }
  /**
   * Checks if the cluster is a _mater_ letter
   *
   * @returns a boolean indicating if the cluster is a _mater_ letter
   *
   * @example
   * ```ts
   * const text = new Text("סוּסָה");
   * text.clusters[1].isMater; // the shureq
   * // false
   * text.clusters[3].isMater; // the heh
   * // true
   * ```
   *
   * @description
   *
   * Returns `true` if `Cluster.hasVowel`, `Cluster.hasSheva`, `Cluster.isShureq`, and `Cluster.next.isShureq` are all `false` and `Cluster.text` contains a:
   * - `ה` preceded by a qamets
   * - `ו` preceded by a holem
   * - `י` preceded by a hiriq, tsere, or segol
   *
   * There are potentially other instances when a consonant may be a _mater_ (e.g. a silent aleph), but these are the most common.
   * Though a shureq is a _mater_ letter, it is also a vowel itself, and thus separate from `isMater`.
   */
  get isMater() {
    const nxtIsShureq = this.next instanceof _a2 ? this.next.isShureq : false;
    if (!this.hasVowel && !this.isShureq && !this.hasSheva && !nxtIsShureq) {
      const text = this.text;
      const prevText = this.prev instanceof _a2 ? this.prev.text : "";
      const maters = /[היו](?!\u{05BC})/u;
      if (!maters.test(text)) {
        return false;
      }
      if (/ה/.test(text) && /\u{05B8}/u.test(prevText)) {
        return true;
      }
      if (/ו/.test(text) && /\u{05B9}/u.test(prevText)) {
        return true;
      }
      if (/י/.test(text) && /\u{05B4}|\u{05B5}|\u{05B6}/u.test(prevText)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Checks if the Cluster does not have Hebrew chars
   *
   * @returns a boolean indicating if the Cluster does not have Hebrew chars
   *
   * ```ts
   * * const text = new Text("(לְעֹלָם)");
   * text.clusters[0].isNotHebrew;
   * // true
   * ```
   */
  get isNotHebrew() {
    return !hebChars.test(this.text);
  }
  /**
   * Checks if the Cluster has any punctuation characters
   *
   * @returns a boolean indicating if the Cluster has any punctuation characters
   *
   * @example
   * ```ts
   * const text = new Text("הָאָֽרֶץ׃");
   * text.clusters[3].isPunctuation;
   * // true
   * ```
   *
   * @description
   * These are all the Hebrew characters of the category PUNCTUATION
   * - \u{05BE} HEBREW PUNCTUATION MAQAF ־
   * - \u{05C0} HEBREW PUNCTUATION PASEQ ׀
   * - \u{05C3} HEBREW PUNCTUATION SOF PASUQ ׃
   * - \u{05C6} HEBREW PUNCTUATION NUN HAFUKHA ׆
   */
  get isPunctuation() {
    const punctuationOnly = new RegExp(`^${punctuation.source}+$`, "u");
    return punctuationOnly.test(this.text);
  }
  /**
   * Checks if the Cluster is a shureq
   *
   * @returns a boolean indicating if the Cluster is a shureq
   *
   *
   * ```ts
   * const text = new Text("קוּם");
   * text.clusters[0].isShureq;
   * // false
   * text.clusters[1].isShureq;
   * // true
   * ```
   *
   * @description
   * Returns `true` if `Cluster.hasVowel`, `Cluster.hasSheva`, and `Cluster.prev.hasVowel` are all `false` and `Cluster.text` is a vav followed by a dagesh (e.g. `וּ`)
   * A shureq is a vowel itself, but contains no vowel characters (hence why `hasVowel` cannot be `true`).
   * This allows for easier syllabification.
   */
  get isShureq() {
    const shureq = /\u{05D5}\u{05BC}/u;
    const prvHasVowel = this.prev?.value?.hasVowel ?? false;
    return !this.hasVowel && !this.hasSheva && !prvHasVowel ? shureq.test(this.text) : false;
  }
  /**
   * Checks if the Cluster is a taam
   *
   * @returns a boolean indicating if the Cluster is a taam
   *
   * @example
   * ```ts
   * const text = new Text("הָאָֽרֶץ׃");
   * text.clusters[3].isTaam;
   * // true
   * ```
   *
   * @description
   * This is an alias for `isPunctuation`.
   * Returns `true` is the Cluster is any of the following characters:
   * - \u{05BE} HEBREW PUNCTUATION MAQAF ־
   * - \u{05C0} HEBREW PUNCTUATION PASEQ ׀
   * - \u{05C3} HEBREW PUNCTUATION SOF PASUQ ׃
   * - \u{05C6} HEBREW PUNCTUATION NUN HAFUKHA ׆
   *
   */
  get isTaam() {
    return this.isPunctuation;
  }
  /**
   * The original string passed
   *
   * @returns the original string passed
   *
   * @description
   * The original string passed to the constructor that has not been normalized or sequenced. See {@link text}
   */
  get original() {
    return __classPrivateFieldGet2(this, _Cluster_original, "f");
  }
  /**
   * The parent `Syllable` of the cluster
   *
   * ```ts
   * const text = new Text("דָּבָר");
   * const lastCluster: Cluster = text.clusters[2];
   * lastCluster.text;
   * // "ר"
   * lastCluster.syllable.text;
   * // "בָר"
   * ```
   *
   * @description
   * If created via the `Text` class, there should always be a syllable.
   */
  get syllable() {
    return __classPrivateFieldGet2(this, _Cluster_syllable, "f");
  }
  /**
   * Sets the parent `Syllable` of the cluster
   *
   */
  set syllable(syllable) {
    __classPrivateFieldSet2(this, _Cluster_syllable, syllable, "f");
  }
  /**
   * Gets all the taamim characters in the cluster
   *
   * @returns an array of taamim characters in the cluster
   *
   * ```ts
   * const text = new Text("אֱלֹהֶ֑֔יךָ");
   * text.clusters[2].taamim;
   * // ["֑", "֔"]
   * ```
   */
  get taamim() {
    if (__classPrivateFieldGet2(this, _Cluster_taamimCache, "f")) {
      return __classPrivateFieldGet2(this, _Cluster_taamimCache, "f");
    }
    const taamimChars = this.chars.reduce((a, char) => {
      if (char.isTaamim && __classPrivateFieldGet2(this, _Cluster_isCharTaam, "f").call(this, char.text)) {
        a.push(char.text);
      }
      return a;
    }, []);
    return __classPrivateFieldSet2(this, _Cluster_taamimCache, taamimChars, "f");
  }
  /**
   * Gets all the names of the taamim characters in the cluster
   *
   * @returns an array of names of taamim characters in the cluster
   *
   * ```ts
   * const text = new Text("אֱלֹהֶ֑֔יךָ");
   * text.clusters[2].taam;
   * // ['ETNAHTA', 'ZAQEF_QATAN' ]
   * ```
   */
  get taamimNames() {
    if (__classPrivateFieldGet2(this, _Cluster_taamimNamesCache, "f")) {
      return __classPrivateFieldGet2(this, _Cluster_taamimNamesCache, "f");
    }
    const taaminNames = this.chars.reduce((a, char) => {
      const text = char.text;
      if (char.isTaamim && __classPrivateFieldGet2(this, _Cluster_isCharTaam, "f").call(this, text)) {
        a.push(charToNameMap[text]);
      }
      return a;
    }, []);
    return __classPrivateFieldSet2(this, _Cluster_taamimNamesCache, taaminNames, "f");
  }
  /**
   * Gets text of the cluster
   *
   * @returns the text of the cluster that has been built up from the .text of its constituent `Char`s
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * const clusters = text.clusters.map((cluster) => cluster.text);
   * // [
   * //  "הֲ",
   * //  "בָ",
   * //  "רֹ",
   * //  "ו",
   * //  "ת"
   * // ]
   * ```
   *
   * @description
   * The text has been normalized and sequenced — see {@link original} for text passed in the constructor.
   */
  get text() {
    return this.chars.reduce((init, char) => init + char.text, "");
  }
  /**
   * Gets all the names of the vowel characters in the cluster
   *
   * @returns an array of names of vowel characters in the cluster
   *
   * @example
   * ```ts
   * const text = new Text("הַֽ֭יְחָבְרְךָ");
   * text.clusters[0].vowelNames;
   * // ['PATAH']
   * ```
   *
   * @description
   * It is exceedingly rare to find more than one vowel character in a cluster.
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Because `Cluster` is concerned with orthography, a sheva is **not** a vowel character
   */
  get vowelNames() {
    if (__classPrivateFieldGet2(this, _Cluster_vowelNamesCache, "f")) {
      return __classPrivateFieldGet2(this, _Cluster_vowelNamesCache, "f");
    }
    const vowelNames = this.chars.reduce((a, char) => {
      if (char.isVowel && __classPrivateFieldGet2(this, _Cluster_isCharVowel, "f").call(this, char.text)) {
        a.push(charToNameMap[char.text]);
      }
      return a;
    }, []);
    return __classPrivateFieldSet2(this, _Cluster_vowelNamesCache, vowelNames, "f");
  }
  /**
   * Gets all the vowel characters in the cluster
   *
   * @returns an array of vowel characters in the cluster
   *
   * @example
   * ```ts
   * const text = new Text("הַֽ֭יְחָבְרְךָ");
   * text.clusters[0].vowel;
   * // "\u{05B7}"
   * text.clusters[3].vowel;
   * // null
   * ```
   *
   * @description
   * It is exceedingly rare to find more than one vowel character in a cluster.
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Because `Cluster` is concerned with orthography, a sheva is **not** a vowel character
   */
  get vowels() {
    if (__classPrivateFieldGet2(this, _Cluster_vowelsCache, "f")) {
      return __classPrivateFieldGet2(this, _Cluster_vowelsCache, "f");
    }
    const vowels3 = this.chars.reduce((a, char) => {
      const text = char.text;
      if (char.isVowel && __classPrivateFieldGet2(this, _Cluster_isCharVowel, "f").call(this, text)) {
        a.push(text);
      }
      return a;
    }, []);
    return __classPrivateFieldSet2(this, _Cluster_vowelsCache, vowels3, "f");
  }
};
_a2 = Cluster, _Cluster_consonantsCache = /* @__PURE__ */ new WeakMap(), _Cluster_consonantNameCache = /* @__PURE__ */ new WeakMap(), _Cluster_original = /* @__PURE__ */ new WeakMap(), _Cluster_sequenced = /* @__PURE__ */ new WeakMap(), _Cluster_syllable = /* @__PURE__ */ new WeakMap(), _Cluster_taamimCache = /* @__PURE__ */ new WeakMap(), _Cluster_vowelsCache = /* @__PURE__ */ new WeakMap(), _Cluster_vowelNamesCache = /* @__PURE__ */ new WeakMap(), _Cluster_taamimNamesCache = /* @__PURE__ */ new WeakMap(), _Cluster_isCharConsonant = /* @__PURE__ */ new WeakMap(), _Cluster_isCharTaam = /* @__PURE__ */ new WeakMap(), _Cluster_isCharVowel = /* @__PURE__ */ new WeakMap(), _Cluster_instances = /* @__PURE__ */ new WeakSet(), _Cluster_sequence = function _Cluster_sequence2(noSequence = false) {
  const chars = [...this.original].map((char) => new Char(char));
  return noSequence ? chars : chars.sort((a, b) => a.sequencePosition - b.sequencePosition);
}, _Cluster_hasMetegCharacter_get = function _Cluster_hasMetegCharacter_get2() {
  return __classPrivateFieldGet2(_a2, _a2, "a", _Cluster_meteg_get).test(this.text);
}, _Cluster_meteg_get = function _Cluster_meteg_get2() {
  return meteg;
};

// node_modules/havarotjs/dist/esm/utils/removeTaamim.js
var removeTaamim = (word) => {
  const globalTaamim = new RegExp(taamim.source, "gu");
  let noTaamim = "";
  const charPos = [];
  for (const [index, element] of [...word].entries()) {
    if (!globalTaamim.test(element)) {
      noTaamim += element;
      charPos.push(index);
    }
  }
  return [noTaamim, charPos];
};

// node_modules/havarotjs/dist/esm/syllable.js
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Syllable_instances;
var _Syllable_cachedStructure;
var _Syllable_cachedStructureWithGemination;
var _Syllable_clusters;
var _Syllable_isClosed;
var _Syllable_isAccented;
var _Syllable_isFinal;
var _Syllable_vowelsCache;
var _Syllable_vowelNamesCache;
var _Syllable_word;
var _Syllable_isCharKeyOfSyllableVowelCharToNameMap;
var sylVowelCharToNameMap = {
  ...vowelCharToNameMap,
  "\u05B0": "SHEVA",
  "\u05D5\u05BC": "SHUREQ"
};
var sylVowelNameToCharMap = {
  ...vowelNameToCharMap,
  SHEVA: "\u05B0",
  SHUREQ: "\u05D5\u05BC"
};
var Syllable = class _Syllable extends Node {
  /**
   * Creates a new Syllable
   *
   * @param clusters an array of {@link Cluster}
   * @param options optional parameters
   *
   * @example
   * ```ts
   * new Syllable([new Cluster("אָ"), new Cluster("ב")]);
   * ```
   *
   * @remarks
   * See the [Syllabification](/guides/syllabification) page for how a syllable is determined.
   * Currently, the Divine Name (e.g. יהוה), non-Hebrew text, and Hebrew punctuation (e.g. _passeq_, _nun hafucha_) are treated as a _single syllable_ because these do not follow the rules of Hebrew syllabification.
   */
  constructor(clusters, { isClosed = false, isAccented = false, isFinal = false } = {}) {
    super();
    _Syllable_instances.add(this);
    _Syllable_cachedStructure.set(this, null);
    _Syllable_cachedStructureWithGemination.set(this, null);
    _Syllable_clusters.set(this, void 0);
    _Syllable_isClosed.set(this, void 0);
    _Syllable_isAccented.set(this, void 0);
    _Syllable_isFinal.set(this, void 0);
    _Syllable_vowelsCache.set(this, null);
    _Syllable_vowelNamesCache.set(this, null);
    _Syllable_word.set(this, null);
    this.value = this;
    __classPrivateFieldSet3(this, _Syllable_clusters, clusters, "f");
    __classPrivateFieldSet3(this, _Syllable_isClosed, isClosed, "f");
    __classPrivateFieldSet3(this, _Syllable_isAccented, isAccented, "f");
    __classPrivateFieldSet3(this, _Syllable_isFinal, isFinal, "f");
  }
  /**
   * Gets all the {@link Char | Characters} in the Syllable
   *
   * @returns a one dimensional array of {@link Char | characters}
   *
   * @example
   * ```ts
   * const text = new Text("וַיִּקְרָ֨א");
   * text.syllables[2].chars;
   * // [
   * //    Char { original: "ר" },
   * //    Char { original: "ָ" },
   * //    Char { original: "" }, i.e. \u{05A8} (does not print well)
   * //    Char { original: "א" }
   * //  ]
   * ```
   */
  get chars() {
    return this.clusters.map((cluster) => cluster.chars).flat();
  }
  /**
   * Gets all the {@link Cluster | Clusters} in the Syllable
   *
   * @returns a one dimensional array of {@link Cluster | clusters}
   *
   * @example
   * ```ts
   * const text = new Text("וַיִּקְרָ֨א");
   * text.syllables[1].clusters;
   * // [
   * //    Cluster { original: "יִּ" },
   * //    Cluster { original: "קְ" }
   * //  ]
   * ```
   */
  get clusters() {
    return __classPrivateFieldGet3(this, _Syllable_clusters, "f");
  }
  /**
   * Gets the coda of the syllable - see {@link structure}
   *
   * @returns the coda of the syllable as a string, including any taamim and ignoring gemination of the following syllable - see {@link codaWithGemination}
   *
   * @example
   * ```ts
   * const text = new Text("יָ֥ם");
   * text.syllables[0].coda;
   * // "ם"
   * ```
   */
  get coda() {
    return this.structure()[2];
  }
  /**
   * Gets the coda of the syllable, including gemination of the following syllable - see {@link structure}
   *
   * @returns the coda of the syllable as a string, including any taamim and including gemination of the following syllable - see {@link structure}
   *
   * @example
   * ```ts
   * const text = new Text("מַדּ֥וּעַ");
   * text.syllables[0].codaWithGemination;
   * // "דּ"
   * text.syllables[0].coda // without gemination
   * // ""
   * ```
   */
  get codaWithGemination() {
    return this.structure(true)[2];
  }
  /**
   * Gets the consonant _characters_ of the syllable
   *
   * @returns a one dimensional array of consonant characters
   *
   * @example
   * ```ts
   * const text = new Text("רְ֭שָׁעִים");
   * text.syllables[2].consonants;
   * // ["ע", "י", "ם"]
   * ```
   *
   * @remarks
   * This returns a one dimensional array of consonant characters, even if the characters are not phonemic consonants,
   * meaning even maters are returned as consonant characters. See the {@link structure} method if you need the consonants with phonemic value.
   *
   *
   */
  get consonants() {
    return this.clusters.map((cluster) => cluster.consonants).flat();
  }
  /**
   * Gets the names of the consonant _characters_ of the syllable
   *
   * @returns a one dimensional array of consonant character names
   *
   * @example
   * ```ts
   * const text = new Text("רְ֭שָׁעִים");
   * text.syllables[2].consonantNames;
   * // ["AYIN", "YOD", "FINAL_MEM"]
   * ```
   *
   * @remarks
   * This returns a one dimensional array of consonant names, even if the characters are not phonemic consonants,
   * meaning even the name of maters are returned. See the {@link structure} method if you need the consonants with phonemic value.
   */
  get consonantNames() {
    return this.clusters.map((cluster) => cluster.consonantNames).flat();
  }
  /**
   * Checks if the syllable contains the consonant _character_ matching the name passed in
   *
   * @returns a boolean indicating if the syllable contains the consonant _character_ matching the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("רְ֭שָׁעִים");
   * text.syllables[2].hasConsonantName("AYIN");
   * // true
   * text.syllables[2].hasConsonantName("YOD");
   * // false
   * ```
   *
   * @remarks
   * This checks if the syllable contains the given consonant name, even if the character is not a phonemic consonant.
   */
  hasConsonantName(name) {
    if (!consonantNameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    return this.consonantNames.includes(name);
  }
  /**
   * Checks if the syllable contains the vowel character of the name passed in
   *
   * @returns a boolean indicating if the syllable contains the vowel character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הַיְחָבְרְךָ");
   * text.syllables[0].hasVowelName("PATAH");
   * // true
   *
   * // test for vocal sheva
   * text.syllables[1].hasVowelName("SHEVA");
   * // true
   *
   * // test for silent sheva
   * text.syllables[2].hasVowelName("SHEVA");
   * // false
   * ```
   *
   * @remarks
   * This returns a boolean if the vowel character is present, even for most mater lectionis (e.g. in a holam vav construction, "HOLAM" would return true)
   * The only exception is a shureq, because there is no vowel character for a shureq.
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Unlike `Cluster`, a `Syllable` is concerned with linguistics, so a sheva **is** a vowel character.
   * It returns `true` for "SHEVA" only when the sheva is the vowel (i.e. a vocal sheva or sheva na').
   */
  hasVowelName(name) {
    if (!sylVowelNameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    return this.vowelNames.includes(name);
  }
  /**
   * Checks if the syllable contains the taamim character of the name passed in
   *
   * @returns a boolean indicating if the syllable contains the taamim character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.syllables[1].hasTaamName("TIPEHA");
   * // true
   * ```
   *
   * @remarks
   * Note: it only checks according to the character name, not its semantic meaning.
   * E.g. "כֵֽן׃" would be `true` when checking for `"METEG"`, not silluq
   */
  hasTaamName(name) {
    if (!taamimNameToCharMap[name]) {
      throw new Error(`${name} is not a valid value`);
    }
    return this.taamimNames.includes(name);
  }
  /**
   * Checks if the Syllable is accented
   *
   * @returns true if Syllable is accented
   *
   * @example
   * ```ts
   * const text = new Text("וַיִּקְרָ֨א"); // note the taam over the ר
   * text.syllables[0].isAccented; // i.e. "וַ"
   * // false
   * text.syllables[2].isAccented; // i.e. "רָ֨א"
   * // true
   * ```
   *
   * @remarks
   * An accented syllable receives stress, and is typically indicated by the presence of a taam character
   */
  get isAccented() {
    return __classPrivateFieldGet3(this, _Syllable_isAccented, "f");
  }
  /**
   * Sets whether the Syllable is accented
   *
   * @param accented a boolean indicating if the Syllable is accented
   *
   */
  set isAccented(accented) {
    __classPrivateFieldSet3(this, _Syllable_isAccented, accented, "f");
  }
  /**
   * Checks if the Syllable is closed
   *
   * @returns true if Syllable is closed
   *
   * @example
   * ```ts
   * const text = new Text("וַיִּקְרָ֨א");
   * text.syllables[0].isClosed; // i.e. "וַ"
   * // true
   * text.syllables[2].isClosed; // i.e. "רָ֨א"
   * // false
   * ```
   *
   * @remarks
   * A closed syllable in Hebrew is a CVC or CVCC type, a mater letter does not close a syllable
   */
  get isClosed() {
    return __classPrivateFieldGet3(this, _Syllable_isClosed, "f");
  }
  /**
   * Sets whether the Syllable is closed
   *
   * @param closed a boolean for whether the Syllable is closed
   *
   */
  set isClosed(closed) {
    __classPrivateFieldSet3(this, _Syllable_isClosed, closed, "f");
  }
  /**
   * Checks if the Syllable is the final syllable in a {@link Word}
   *
   * @returns true if Syllable is final
   *
   * @example
   * ```ts
   * const text = new Text("וַיִּקְרָ֨א");
   * text.syllables[0].isFinal; // i.e. "וַ"
   * // false
   * text.syllables[2].isFinal; // i.e. "רָ֨א"
   * // true
   * ```
   */
  get isFinal() {
    return __classPrivateFieldGet3(this, _Syllable_isFinal, "f");
  }
  /**
   * Sets whether the Syllable is the final syllable in a {@link Word}
   *
   * @param final a boolean for whether the Syllable is the final Syallble
   */
  set isFinal(final) {
    __classPrivateFieldSet3(this, _Syllable_isFinal, final, "f");
  }
  /**
   * Returns the nucleus of the syllable - see {@link structure}
   *
   * @returns the nucleus of the syllable as a string, including any taamim - see {@link structure}
   *
   * @example
   * ```ts
   * const text = new Text("יָ֥ם");
   * text.syllables[0].nucleus;
   * // "\u{05B8}\u{05A5}""
   * ```
   * @remarks
   * The nucleus is the vowel of the syllable - present in every syllable and containing its {@link vowel} (with any materes lecticonis) or a shureq.
   */
  get nucleus() {
    return this.structure()[1];
  }
  /**
   * Returns the onset of the syllable - see {@link structure}
   *
   * @returns the onset of the syllable as a string - see {@link structure}
   *
   * @example
   * ```ts
   * const text = new Text("יָ֥ם");
   * text.syllables[0].onset;
   * // "י"
   * ```
   * @remarks
   * The onset is any initial consonant of the syllable - present in every syllable except those containing a except word-initial shureq or a furtive patah.
   */
  get onset() {
    return this.structure()[0];
  }
  /**
   * Returns the structure of the syllable
   *
   * @returns the structure of the Syllable, i.e. the syllable's onset, nucleus, and coda.
   *
   * @param withGemination If this argument is `true`, include gemination of the next syllable's onset in this syllable's coda.
   *
   * @example
   * ```ts
   * const text = new Text("מַדּוּעַ");
   * text.syllables.map(s => s.structure(true));
   * // [
   * //   [ 'מ', 'ַ', 'דּ' ],
   * //   [ 'דּ', 'וּ', '' ], NOTE: the dalet is the onset, but rendering can sometimes causes the blank string to appear to be first
   * //   [ '', 'ַ', 'ע' ]
   * // ]
   * ```
   *
   * @remarks
   * - The onset is any initial consonant of the syllable - present in every syllable except those containing a except word-initial shureq or a furtive patah.
   * - The nucleus is the vowel of the syllable - present in every syllable and containing its {@link vowel} (with any materes lecticonis) or a shureq.
   * - The coda is all final consonants of the syllable - not including any matres lecticonis, and including the onset of the subsequent syllable if the subsequent syllable is geminated and the `withGemination` argument is `true`.
   */
  structure(withGemination = false) {
    if (withGemination && __classPrivateFieldGet3(this, _Syllable_cachedStructureWithGemination, "f")) {
      return __classPrivateFieldGet3(this, _Syllable_cachedStructureWithGemination, "f");
    }
    if (!withGemination && __classPrivateFieldGet3(this, _Syllable_cachedStructure, "f")) {
      return __classPrivateFieldGet3(this, _Syllable_cachedStructure, "f");
    }
    const heClusters = this.clusters.filter((c) => !c.isNotHebrew);
    if (heClusters.length === 0) {
      const structure2 = ["", "", ""];
      __classPrivateFieldSet3(this, _Syllable_cachedStructure, structure2, "f");
      __classPrivateFieldSet3(this, _Syllable_cachedStructureWithGemination, structure2, "f");
      return structure2;
    }
    const first = heClusters[0];
    if (first.isShureq) {
      const structure2 = [
        "",
        first.text,
        heClusters.slice(1).map((c) => c.text).join("")
      ];
      __classPrivateFieldSet3(this, _Syllable_cachedStructure, structure2, "f");
      __classPrivateFieldSet3(this, _Syllable_cachedStructureWithGemination, structure2, "f");
      return structure2;
    }
    if (this.isFinal && !this.isClosed) {
      const matchFurtive = this.text.match(/(\u{05D7}|\u{05E2}|\u{05D4}\u{05BC})(\u{05B7})(\u{05C3})?$/mu);
      if (matchFurtive) {
        const structure2 = ["", matchFurtive[2], matchFurtive[1] + (matchFurtive[3] || "")];
        __classPrivateFieldSet3(this, _Syllable_cachedStructure, structure2, "f");
        __classPrivateFieldSet3(this, _Syllable_cachedStructureWithGemination, structure2, "f");
        return structure2;
      }
    }
    let [onset, nucleus, coda] = ["", "", ""];
    let i = 0;
    for (; i < first.chars.length && (first.chars[i].sequencePosition < 3 || first.chars[i].text === "\u05BD"); i++) {
      onset += first.chars[i].text;
    }
    for (; i < first.chars.length && [3, 4].includes(first.chars[i].sequencePosition); i++) {
      nucleus += first.chars[i].text;
    }
    for (; i < first.chars.length; i++) {
      coda += first.chars[i].text;
    }
    let clusters_processed = 1;
    if (coda.length === 0 && heClusters.length > 1 && (heClusters[1].isShureq || heClusters[1].isMater)) {
      nucleus += heClusters[1].text;
      clusters_processed++;
    }
    coda += heClusters.slice(clusters_processed).map((c) => c.text).join("");
    if (withGemination && coda.length === 0 && !/\u{05B0}/u.test(nucleus)) {
      if (this.next instanceof _Syllable) {
        const nextOnset = this.next.onset;
        if (/\u{05BC}/u.test(nextOnset)) {
          coda = nextOnset;
        }
      }
    }
    const structure = [onset, nucleus, coda];
    if (withGemination) {
      __classPrivateFieldSet3(this, _Syllable_cachedStructureWithGemination, structure, "f");
    } else {
      __classPrivateFieldSet3(this, _Syllable_cachedStructure, structure, "f");
    }
    return structure;
  }
  /**
   * Gets all the taamim characters in the Syllable
   *
   * @returns a one dimensional array of taamim characters in the syllable
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.syllables[1].taamim;
   * // ["\u{596}"]
   * ```
   */
  get taamim() {
    return this.clusters.map((c) => c.taamim).flat();
  }
  /**
   * Gets all the taamim names in the Syllable
   *
   * @returns a one dimensional array of taamim names in the syllable
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.syllables[1].taamimNames;
   * // ["TIPEHA"]
   * ```
   */
  get taamimNames() {
    return this.clusters.map((c) => c.taamimNames).flat();
  }
  /**
   * The text of the syllable
   *
   * @returns the sequenced and normalized text of the syllable
   *
   * @example
   * ```ts
   * const text = new Text("וַיִּקְרָ֨א");
   * text.syllables.map((syl) => syl.text);
   * //  [
   * //    "וַ"
   * //    "יִּקְ"
   * //    "רָ֨א"
   * //  ]
   * ```
   *
   * @remarks
   * This returns a string that has been built up from the .text of its constituent Clusters.
   */
  get text() {
    return this.clusters.map((c) => c.text).join("");
  }
  /**
   * Gets the names of the vowel characters in the syllable
   *
   * @returns an array of names of vowel characters in the syllable
   *
   * @example
   * ```ts
   * const text = new Text("מִתָּ֑͏ַ֜חַת");
   * text.syllables[1].vowelNames;
   * // ["QAMATS", "PATAH"]
   * ```
   *
   * @remarks
   * This returns an array of names of vowel characters in the syllable, but not for mater lectionis (e.g. a holam vav would return the HOLAM, not the vav).
   * The only exception is a shureq, which returns "SHUREQ" because there is no vowel character for a shureq.
   * It is very uncommon to have multiple vowel characters in a syllable.
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Unlike `Cluster`, a `Syllable` is concerned with linguistics, so a sheva **is** a vowel character.
   */
  get vowelNames() {
    if (__classPrivateFieldGet3(this, _Syllable_vowelNamesCache, "f")) {
      return __classPrivateFieldGet3(this, _Syllable_vowelNamesCache, "f");
    }
    const vowelNames = this.vowels.reduce((a, vowel) => {
      if (sylVowelCharToNameMap[vowel]) {
        a.push(sylVowelCharToNameMap[vowel]);
      }
      return a;
    }, []).flat();
    return __classPrivateFieldSet3(this, _Syllable_vowelNamesCache, vowelNames, "f");
  }
  /**
   * Gets the vowel characters of the syllable
   *
   * @returns an array of vowel characters in the syllable
   *
   * @example
   * ```ts
   * const text = new Text("מִתָּ֑͏ַ֜חַת");
   * text.syllables[1].vowels;
   * // ["\u{05B8}", "\u{05B7}"]
   * ```
   *
   * @remarks
   * This returns a single vowel character, even for most mater lectionis (e.g. a holam vav would return the holam, not the vav).
   * The only exception is a shureq, which returns the vav and the dagesh because there is no vowel character for a shureq.
   * It is very uncommon to have multiple vowel characters in a syllable.
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * Unlike `Cluster`, a `Syllable` is concerned with linguistics, so a sheva **is** a vowel character
   */
  get vowels() {
    if (__classPrivateFieldGet3(this, _Syllable_vowelsCache, "f")) {
      return __classPrivateFieldGet3(this, _Syllable_vowelsCache, "f");
    }
    const nucleus = this.nucleus;
    const noTaamim = removeTaamim(nucleus)[0];
    const shureq = sylVowelNameToCharMap.SHUREQ;
    const shureqPresentation = "\uFB35";
    const vowels3 = noTaamim.replace(shureq, shureqPresentation).split("").reduce((a, v) => {
      if (__classPrivateFieldGet3(this, _Syllable_instances, "m", _Syllable_isCharKeyOfSyllableVowelCharToNameMap).call(this, v)) {
        a.push(v);
      }
      if (v === shureqPresentation) {
        a.push(shureq);
      }
      return a;
    }, []);
    return __classPrivateFieldSet3(this, _Syllable_vowelsCache, vowels3, "f");
  }
  /**
   * Gets the {@link Word} to which the syllable belongs
   *
   * @returns the `Word` to which the syllable belongs
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.syllables[0].word;
   * // Word {
   * //   text: "הָאָ֖רֶץ"
   * // }
   * ```
   */
  get word() {
    return __classPrivateFieldGet3(this, _Syllable_word, "f");
  }
  /**
   * Sets the {@link Word} to which the syllable belongs
   *
   * @param word - the `Word` to which the syllable belongs
   */
  set word(word) {
    __classPrivateFieldSet3(this, _Syllable_word, word, "f");
  }
};
_Syllable_cachedStructure = /* @__PURE__ */ new WeakMap(), _Syllable_cachedStructureWithGemination = /* @__PURE__ */ new WeakMap(), _Syllable_clusters = /* @__PURE__ */ new WeakMap(), _Syllable_isClosed = /* @__PURE__ */ new WeakMap(), _Syllable_isAccented = /* @__PURE__ */ new WeakMap(), _Syllable_isFinal = /* @__PURE__ */ new WeakMap(), _Syllable_vowelsCache = /* @__PURE__ */ new WeakMap(), _Syllable_vowelNamesCache = /* @__PURE__ */ new WeakMap(), _Syllable_word = /* @__PURE__ */ new WeakMap(), _Syllable_instances = /* @__PURE__ */ new WeakSet(), _Syllable_isCharKeyOfSyllableVowelCharToNameMap = function _Syllable_isCharKeyOfSyllableVowelCharToNameMap2(char) {
  return char in sylVowelCharToNameMap;
};

// node_modules/havarotjs/dist/esm/utils/holemWaw.js
var findMatches = (word, regx, cb) => {
  regx.lastIndex = 0;
  const [noTaamim, charPos] = removeTaamim(word);
  const matches = noTaamim.matchAll(regx);
  if (!matches) {
    return word;
  }
  for (const match of matches) {
    const start = charPos[match.index];
    const end = charPos[match[0].length] + start;
    word = cb(word, start, end);
  }
  regx.lastIndex = 0;
  return word;
};
var holemWaw = (word, options) => {
  const wawRegX = /\u{05D5}/u;
  const holemRegx = /\u{05B9}/u;
  const holemHaser = /\u{05BA}/u;
  const wawHolemRegX = /\u{05D5}\u{05B9}/u;
  const vowels3 = /[\u{05B0}-\u{05BB}\u{05C7}]/u;
  const vavHolemMale = new RegExp("(?<!" + vowels3.source + ")" + wawHolemRegX.source, "gu");
  const vavHolemHaser = new RegExp("(?<=" + vowels3.source + ")" + wawRegX.source + taamim.source + "?" + holemRegx.source, "gu");
  if (options.holemHaser === "remove" && holemHaser.test(word)) {
    word = word.replace(holemHaser, "\u05B9");
  }
  if (!wawRegX.test(word) || !holemRegx.test(word) || !wawHolemRegX.test(word)) {
    return word;
  }
  word = vavHolemMale.test(word) ? findMatches(word, vavHolemMale, () => {
    return word.replaceAll(vavHolemMale, "\u05B9\u05D5");
  }) : word;
  word = options.holemHaser === "update" && vavHolemHaser.test(removeTaamim(word)[0]) ? findMatches(word, vavHolemHaser, (w) => {
    const vavTaamHolem = new RegExp(`${wawRegX.source}(${taamim.source})?${holemRegx.source}`, "gu");
    return w.replace(vavTaamHolem, "\u05D5\u05BA$1");
  }) : word;
  return word;
};

// node_modules/havarotjs/dist/esm/utils/sequence.js
var sequence = (text) => {
  const splits = /(?=[\u{05C0}\u{05D0}-\u{05F2}])/u;
  const hiriqPatah = /\u{5B4}\u{5B7}/u;
  const hiriqQamets = /\u{5B4}\u{5B8}/u;
  if (hiriqPatah.test(text))
    text = text.replace(hiriqPatah, "\u05B7\u05B4");
  else if (hiriqQamets.test(text))
    text = text.replace(hiriqQamets, "\u05B8\u05B4");
  return text.split(splits).map((word) => new Cluster(word)).map((cluster) => cluster.chars);
};

// node_modules/havarotjs/dist/esm/utils/qametsQatan.js
var snippets = [
  "\u05D0\u05B8\u05D1\u05B0\u05D3\u05B7\u05DF",
  "\u05D0\u05B8\u05D1\u05B0\u05E0",
  "\u05D0\u05B8\u05D6\u05B0\u05E0",
  "\u05D0\u05B8\u05DB\u05B0\u05DC",
  "\u05D0\u05B8\u05E0\u05B4\u05D9\u05BC",
  "\u05D0\u05B8\u05E4\u05B0\u05E0",
  "\u05D0\u05B8\u05E8\u05B0\u05D7",
  "\u05D0\u05B8\u05E8\u05B0\u05DB\u05BC",
  "\u05D0\u05B8\u05E9\u05B0\u05C1\u05E8",
  "\u05D1\u05B8\u05D0\u05B0\u05E9\u05C1",
  "\u05D1\u05B8\u05E9\u05B0\u05C1\u05EA\u05BC",
  "\u05D1\u05B8\u05BC\u05E9\u05B0\u05C1\u05EA\u05BC",
  "\u05D2\u05B8\u05D1\u05B0\u05D4",
  "\u05D2\u05B8\u05BC\u05D1\u05B0\u05D4",
  "\u05D2\u05B8\u05D3\u05B0\u05DC",
  "\u05D2\u05B8\u05BC\u05D3\u05B0\u05DC",
  "\u05D2\u05BC\u05B8\u05DC\u05B0\u05D9",
  // partial Goliath
  "\u05D2\u05B8\u05E8\u05B0\u05E0",
  "\u05D2\u05B8\u05BC\u05E8\u05B0\u05E0",
  "\u05D3\u05B8\u05BC\u05DB\u05B0\u05D9",
  "\u05D3\u05B8\u05BC\u05E8\u05B0\u05D1\u05B8\u05BD\u05DF",
  "\u05D7\u05B8\u05D3\u05B0\u05E9\u05C1",
  "\u05D7\u05B8\u05DB\u05B0\u05DE",
  "\u05D7\u05B8\u05DC\u05B0\u05D9\u05BD\u05D5\u05B9",
  "\u05D7\u05B8\u05DC\u05B0\u05D9\u05B9\u05D5",
  "\u05D7\u05B8\u05E4\u05B0\u05E0",
  "\u05D7\u05B8\u05E4\u05B0\u05E9\u05C1",
  "\u05D7\u05B8\u05E8\u05B0\u05D1",
  "\u05D7\u05B8\u05E8\u05B0\u05E0\u05B6\u05E4\u05B6\u05E8",
  "\u05D7\u05B8\u05E8\u05B0\u05E4\u05BC",
  "\u05D7\u05B8\u05E9\u05B0\u05C1\u05DB\u05BC",
  "\u05D9\u05B8\u05E4\u05B0\u05D9",
  "\u05D9\u05B8\u05E9\u05B0\u05C1\u05E8",
  "\u05DE\u05B8\u05E8\u05B0\u05D3\u05B0\u05BC\u05DB\u05B7\u05D9",
  "\u05DE\u05B8\u05EA\u05B0\u05E0",
  "\u05E1\u05B8\u05DC\u05B0\u05EA\u05BC",
  "\u05E2\u05B8\u05D6\u05BC",
  "\u05E2\u05B8\u05DE\u05B0\u05E8",
  "\u05E2\u05B8\u05E0\u05B0\u05D9",
  "\u05E2\u05B8\u05E4\u05B0\u05E0\u05B4\u05D9",
  "\u05E2\u05B8\u05E4\u05B0\u05E8",
  "\u05E2\u05B8\u05E8\u05B0\u05DC",
  "\u05E2\u05B8\u05E8\u05B0\u05E4\u05BC",
  "\u05E2\u05B8\u05E9\u05B0\u05C1\u05E8",
  "\u05E6\u05B8\u05E8\u05B0\u05DB\u05BC",
  "\u05E7\u05B8\u05D3\u05B0\u05E7",
  "\u05E7\u05B8\u05D3\u05B0\u05E9\u05C1",
  "\u05E7\u05B8\u05E8\u05B0\u05D1\u05BC",
  "\u05E7\u05B8\u05E8\u05B0\u05D7",
  "\u05E8\u05B8\u05D2\u05B0\u05D6",
  "\u05E8\u05B8\u05D7\u05B0\u05D1\u05BC",
  "\u05E9\u05B8\u05C1\u05E8\u05B0\u05E9\u05C1",
  "\u05E9\u05B8\u05C1\u05E8\u05B8\u05E9\u05C1",
  "\u05EA\u05B8\u05BC\u05DB\u05B0\u05E0\u05B4\u05D9\u05EA"
];
var wholeWords = [
  // nouns
  "\u05D7\u05C7\u05E4\u05B0\u05E8\u05B7\u05E2",
  // personal name, see Jer 44:30
  "\u05D7\u05B8\u05E7\u05BE",
  "(\u05DE\u05B4)?\u05DB\u05B8\u05BC\u05DC\u05BE",
  // kol w/ maqqef optionally preceded by mem
  "(\u05D5\u05BC\u05D1\u05B0|\u05D5\u05B0|\u05D1\u05BC\u05B0|\u05DC\u05B0)?\u05DB\u05B8\u05DC\u05BE",
  // kol w/ maqqef optionally preceded by shureq + bet, waw, bet, or lamed
  "^(\u05DE\u05B4)?\u05DB\u05B8\u05BC\u05DC ?$",
  // kol w/o maqqef optionally preceded by mem
  "^(\u05D5\u05BC\u05D1\u05B0|\u05D5\u05B0|\u05D1\u05BC\u05B0|\u05DC\u05B0)?\u05DB\u05B8\u05DC ?$",
  // kol w/o maqqef optionally preceded by shureq + bet, waw, bet, or lamed
  "\u05DE\u05B8\u05E8\u05BE",
  "\u05E2\u05B8\u05EA\u05B0\u05E0\u05B4\u05D9\u05D0\u05B5\u05DC",
  "\u05E8\u05B8\u05D1\u05BE",
  "\u05EA\u05B8\u05DD\u05BE",
  "\u05EA\u05B8\u05BC\u05DD\u05BE",
  // verbs
  "\u05D7\u05B8\u05E0\u05B5\u05BC\u05E0\u05B4\u05D9",
  "\u05D5\u05B7\u05D9\u05B8\u05BC\u05DE\u05B8\u05EA",
  "\u05D5\u05B7\u05D9\u05B8\u05BC\u05E0\u05B8\u05E1",
  "\u05D5\u05B7\u05D9\u05B8\u05BC\u05E7\u05B8\u05DD",
  "\u05D5\u05B7\u05D9\u05B8\u05BC\u05E8\u05B8\u05DD",
  "\u05D5\u05B7\u05D9\u05B8\u05BC\u05E9\u05B8\u05C1\u05D1",
  "\u05D5\u05B7\u05EA\u05B8\u05BC\u05DE\u05B8\u05EA",
  "\u05D5\u05B7\u05EA\u05B8\u05BC\u05E7\u05B8\u05DD",
  "\u05D5\u05B7\u05EA\u05B8\u05BC\u05E9\u05B8\u05C1\u05D1"
];
var sequenceSnippets = (arr) => {
  return arr.map((snippet) => sequence(snippet.normalize("NFKD")).flat().reduce((a, c) => a + c.text, ""));
};
var snippetsRegx = sequenceSnippets(snippets);
var wholeWordsRegx = sequenceSnippets(wholeWords);
var convertsQametsQatan = (word) => {
  const qametsReg = /\u{05B8}/u;
  const qametsQatReg = /\u{05C7}/u;
  const hatefQamRef = /\u{05B3}/u;
  if (!qametsReg.test(word) || qametsQatReg.test(word)) {
    return word;
  }
  if (hatefQamRef.test(word)) {
    const hatefPos = word.indexOf("\u05B3");
    const qamPos = word.indexOf("\u05B8");
    if (qamPos !== -1 && qamPos < hatefPos) {
      return word.substring(0, qamPos) + "\u05C7" + word.substring(qamPos + 1);
    }
  }
  const [noTaamim, charPos] = removeTaamim(word);
  for (const wholeWord of wholeWordsRegx) {
    const regEx = new RegExp(wholeWord);
    const match = noTaamim.match(regEx);
    if (!match) {
      continue;
    } else {
      const lastQam = word.lastIndexOf("\u05B8");
      return word.substring(0, lastQam) + "\u05C7" + word.substring(lastQam + 1);
    }
  }
  for (const snippet of snippetsRegx) {
    const regEx = new RegExp(snippet);
    const match = noTaamim.match(regEx);
    if (!match) {
      continue;
    } else {
      const start = charPos[match.index];
      const end = charPos[match[0].length] + start;
      const matched = word.substring(start, end);
      const withQQatan = matched.split(qametsReg).join("\u05C7");
      word = word.split(matched).join(withQQatan);
      return word;
    }
  }
  return word;
};

// node_modules/havarotjs/dist/esm/utils/syllabifier.js
var createNewSyllable = (result, syl, isClosed) => {
  isClosed = isClosed || false;
  const syllable = new Syllable(syl, { isClosed });
  result.push(syllable);
  return [];
};
var groupFinal = (arr) => {
  const len = arr.length;
  let i = 0;
  const syl = [];
  let result = [];
  let vowelPresent = false;
  let finalCluster = arr[i];
  syl.unshift(finalCluster);
  if (finalCluster.isPunctuation && arr[i + 1]) {
    i++;
    finalCluster = arr[i];
    syl.unshift(finalCluster);
  }
  if (finalCluster.hasVowel) {
    vowelPresent = true;
    i++;
  } else if (finalCluster.isShureq) {
    i++;
    if (i <= len && arr[i]) {
      syl.unshift(arr[i]);
    }
    vowelPresent = true;
    i++;
  } else {
    i++;
  }
  while (!vowelPresent) {
    const nxt = arr[i];
    const curr = nxt ? nxt : false;
    if (!curr) {
      break;
    }
    syl.unshift(curr);
    if (curr.isShureq) {
      i++;
      if (arr[i])
        syl.unshift(arr[i]);
      vowelPresent = true;
    } else {
      const clusterHasVowel = "hasVowel" in curr ? curr.hasVowel : true;
      vowelPresent = clusterHasVowel || curr.isShureq;
    }
    i++;
    if (i > len) {
      break;
    }
  }
  const finalChar = finalCluster.chars.filter((c) => c.sequencePosition !== 4).at(-1)?.text || "";
  const hasFinalVowel = vowels.test(finalChar);
  const isClosed = !finalCluster.isShureq && !finalCluster.isMater && // if final cluster is an aleph, then the syllable is open (e.g. בָּרָ֣א)
  // unless the preceding cluster has a sheva (e.g. וַיַּ֧רְא)
  (!/\u{05D0}/u.test(finalCluster.text) || finalCluster?.prev?.value?.hasSheva) && // if the final cluster is an he but without a mappiq, then the syllable is open
  // this applies even to cases where the he is not a mater (e.g. פֹּ֖ה)
  !/\u{05D4}(?!\u{05bc})/u.test(finalCluster.text) && !hasFinalVowel;
  const finalSyllable = new Syllable(syl, { isClosed });
  const remainder = arr.slice(i);
  result = remainder.length ? remainder : [];
  result.unshift(finalSyllable);
  return result;
};
var groupShevas = (arr, options) => {
  const len = arr.length;
  let syl = [];
  const result = [];
  let shevaPresent = false;
  const shevaNewSyllable = createNewSyllable.bind(groupShevas, result);
  for (let index = 0; index < len; index++) {
    const cluster = arr[index];
    if (cluster instanceof Syllable) {
      result.push(cluster);
      continue;
    }
    const clusterHasSheva = cluster.hasSheva;
    if (shevaPresent && clusterHasSheva) {
      syl = shevaNewSyllable(syl);
      syl.unshift(cluster);
      continue;
    }
    if (clusterHasSheva && cluster.hasMeteg && options.shevaWithMeteg) {
      syl.unshift(cluster);
      syl = shevaNewSyllable(syl);
      continue;
    }
    const consonant = cluster.chars[0].text;
    const prevConsonant = arr[index - 1]?.chars[0].text || "";
    const nextClusterVowel = arr[index + 1];
    if (!shevaPresent && clusterHasSheva && (consonant !== prevConsonant || nextClusterVowel instanceof Cluster && nextClusterVowel.hasShortVowel)) {
      shevaPresent = true;
      syl.unshift(cluster);
      continue;
    }
    if (shevaPresent && (cluster.hasShortVowel || cluster.hasHalfVowel)) {
      if (options.shevaAfterMeteg && cluster.hasMeteg) {
        syl = shevaNewSyllable(syl);
        syl.unshift(cluster);
        continue;
      }
      const dageshRegx = /\u{05BC}/u;
      const prev = syl[0].text;
      const sqnmlvy = /[שסצקנמלוי]/;
      const wawConsecutive = /וַ/;
      if (dageshRegx.test(prev)) {
        syl = shevaNewSyllable(syl);
      } else if ((options.sqnmlvy || options.shevaAfterMeteg && cluster.hasMeteg) && sqnmlvy.test(prev) && wawConsecutive.test(cluster.text)) {
        syl = shevaNewSyllable(syl);
        result.push(new Syllable([cluster]));
        shevaPresent = false;
        continue;
      } else if (options.article && /[ילמ]/.test(prev) && /הַ/.test(cluster.text)) {
        syl = shevaNewSyllable(syl);
        result.push(new Syllable([cluster]));
        shevaPresent = false;
        continue;
      }
      syl.unshift(cluster);
      syl = shevaNewSyllable(syl, true);
      shevaPresent = false;
      continue;
    }
    if (shevaPresent && cluster.hasLongVowel) {
      if (options.longVowels || cluster.hasMeteg && options.shevaAfterMeteg) {
        syl = shevaNewSyllable(syl);
        result.push(cluster);
        shevaPresent = false;
      } else {
        syl.unshift(cluster);
        syl = shevaNewSyllable(syl, true);
        shevaPresent = false;
      }
      continue;
    }
    if (shevaPresent && cluster.isShureq) {
      if (!options.wawShureq && (!options.shevaAfterMeteg || !cluster.hasMeteg) && len - 1 === index) {
        syl.unshift(cluster);
        syl = shevaNewSyllable(syl, true);
      } else {
        syl = shevaNewSyllable(syl);
        result.push(cluster);
        shevaPresent = false;
      }
      continue;
    }
    if (shevaPresent && cluster.isMater && options.longVowels) {
      syl = shevaNewSyllable(syl);
      result.push(cluster);
      shevaPresent = false;
      continue;
    }
    if (shevaPresent && !cluster.hasVowel) {
      syl.unshift(cluster);
      continue;
    }
    result.push(cluster);
  }
  if (syl.length) {
    shevaNewSyllable(syl);
  }
  return result;
};
var groupMaters = (arr, strict = true) => {
  const len = arr.length;
  let syl = [];
  const result = [];
  const materNewSyllable = createNewSyllable.bind(groupMaters, result);
  for (let index = 0; index < len; index++) {
    const cluster = arr[index];
    if (cluster instanceof Syllable) {
      result.push(cluster);
      continue;
    }
    if (cluster.isMater) {
      syl.unshift(cluster);
      const nxt = arr[index + 1];
      if (!nxt && strict) {
        const word = arr.map((i) => i.text).join("");
        throw new Error(`The cluster ${cluster.text} is a mater, but nothing precedes it in ${word}`);
      }
      if (nxt instanceof Syllable) {
        const word = arr.map((i) => i.text).join("");
        if (strict) {
          throw new Error(`Syllable ${nxt.text} should not precede a Cluster with a Mater in ${word}`);
        } else {
          syl.unshift(...nxt.clusters);
        }
      } else {
        syl.unshift(nxt);
      }
      syl = materNewSyllable(syl);
      index++;
    } else if (!cluster.hasVowel && /א/.test(cluster.text)) {
      syl.unshift(cluster);
      const nxt = arr[index + 1];
      if (!nxt && strict) {
        const word = arr.map((i) => i.text).join("");
        throw new Error(`The cluster ${cluster.text} is a quiesced alef, but nothing precedes it in ${word}`);
      }
      if (nxt instanceof Syllable) {
        result.push(cluster);
        continue;
      }
      if (nxt)
        syl.unshift(nxt);
      syl = materNewSyllable(syl);
      index++;
    } else {
      result.push(cluster);
    }
  }
  return result;
};
var groupShureqs = (arr, strict = true) => {
  const len = arr.length;
  let syl = [];
  const result = [];
  const shureqNewSyllable = createNewSyllable.bind(groupShureqs, result);
  for (let index = 0; index < len; index++) {
    const cluster = arr[index];
    if (cluster instanceof Syllable) {
      result.push(cluster);
      continue;
    }
    if (cluster.isShureq) {
      syl.unshift(cluster);
      const nxt = arr[index + 1];
      if (strict && nxt instanceof Syllable) {
        const word = arr.map((i) => i.text).join("");
        throw new Error(`Syllable ${nxt.text} should not precede a Cluster with a Shureq in ${word}`);
      }
      if (nxt)
        syl.unshift(nxt);
      syl = shureqNewSyllable(syl);
      index++;
    } else {
      result.push(cluster);
    }
  }
  return result;
};
var groupClusters = (arr, options) => {
  const rev = arr.reverse();
  const finalGrouped = groupFinal(rev);
  const shevasGrouped = groupShevas(finalGrouped, options);
  const shureqGroups = groupShureqs(shevasGrouped, options.strict);
  const matersGroups = groupMaters(shureqGroups, options.strict);
  const result = matersGroups.reverse();
  return result;
};
var setIsClosed = (syllable, index, arr) => {
  if (index === arr.length - 1) {
    return;
  }
  if (!syllable.isClosed) {
    const dageshRegx = /\u{05BC}/u;
    const hasShortVowel = !!syllable.clusters.filter((cluster) => cluster.hasShortVowel).length;
    const hasNoVowel = hasShortVowel || !!(syllable.clusters.filter((cluster) => !cluster.hasVowel).length - 1);
    const prev = arr[index + 1];
    const prevDagesh = dageshRegx.test(prev.clusters[0].text);
    syllable.isClosed = (hasShortVowel || hasNoVowel) && prevDagesh;
  }
};
var setIsAccented = (syllable) => {
  if (syllable.isAccented) {
    return;
  }
  const jerusalemFinal = /\u{5B4}\u{05DD}/u;
  const jerusalemPrev = /ל[\u{5B8}\u{5B7}]/u;
  let prev = syllable.prev?.value;
  if (jerusalemFinal.test(syllable.text) && prev && jerusalemPrev.test(prev.text)) {
    prev.isAccented = true;
    return;
  }
  const segolta = /\u{0592}/u;
  if (segolta.test(syllable.text)) {
    if (syllable.isFinal && prev) {
      while (prev) {
        if (segolta.test(prev.text)) {
          prev.isAccented = true;
          return;
        }
        prev = prev?.prev?.value ?? null;
      }
    }
    syllable.isAccented = true;
    return;
  }
  const zarqa = /\u{05AE}/u;
  if (zarqa.test(syllable.text)) {
    const zarqaHelper = /\u{0598}/u;
    if (syllable.isFinal && prev) {
      while (prev) {
        if (zarqaHelper.test(prev.text)) {
          prev.isAccented = true;
          return;
        }
        prev = prev?.prev?.value ?? null;
      }
    }
  }
  const sinnorit = /\u{0598}/u;
  if (sinnorit.test(syllable.text)) {
    syllable.isAccented = false;
    return;
  }
  const pashta = /\u{0599}/u;
  const sylText = syllable.text;
  if (syllable.isFinal && pashta.test(sylText)) {
    const qadma = /\u{05A8}/u;
    while (prev) {
      if (pashta.test(prev.text) || qadma.test(prev.text)) {
        return;
      }
      prev = prev?.prev?.value ?? null;
    }
  }
  const telishaQetana = /\u{05A9}/u;
  if (telishaQetana.test(syllable.text)) {
    while (prev) {
      if (telishaQetana.test(prev.text)) {
        prev.isAccented = true;
        return;
      }
      prev = prev?.prev?.value ?? null;
    }
    syllable.isAccented = true;
    return;
  }
  const teslishaGedola = /\u{05A0}/u;
  if (teslishaGedola.test(syllable.text)) {
    let next = syllable.next?.value;
    while (next) {
      if (teslishaGedola.test(next.text)) {
        next.isAccented = true;
        return;
      }
      next = next?.next?.value ?? null;
    }
    syllable.isAccented = true;
    return;
  }
  const ole = /\u{05AB}/u;
  if (ole.test(syllable.text)) {
    const yored = /\u{05A5}/u;
    let next = syllable.next?.value;
    while (next) {
      if (yored.test(next.text)) {
        next.isAccented = true;
        syllable.isAccented = false;
        return;
      }
      next = next?.next?.value ?? null;
    }
    syllable.isAccented = true;
    return;
  }
  const dechi = /\u{05AD}/u;
  if (dechi.test(syllable.text)) {
    let next = syllable.next?.value;
    while (next) {
      if (!next?.next) {
        next.isAccented = true;
        return;
      }
      next = next?.next?.value ?? null;
    }
  }
  const gereshMuqdam = /\u{059D}/u;
  if (gereshMuqdam.test(syllable.text)) {
    syllable.isAccented = false;
    return;
  }
  const isAccented = syllable.clusters.filter((cluster) => cluster.hasTaamim || cluster.hasSilluq ? true : false).length ? true : false;
  syllable.isAccented = isAccented;
};
var clusterPos = (cluster, i) => {
  return { cluster, pos: i };
};
var reinsertLatin = (syls, latin) => {
  const numOfSyls = syls.length;
  for (let index = 0; index < latin.length; index++) {
    const group = latin[index];
    const partial = [];
    if (group.pos === 0) {
      partial.push(group.cluster);
      while (index + 1 < latin.length && latin[index + 1].pos === group.pos + 1) {
        partial.push(latin[index + 1].cluster);
        index++;
      }
      const firstSyl = syls[0];
      syls[0] = new Syllable([...partial, ...firstSyl.clusters], {
        isAccented: firstSyl.isAccented,
        isClosed: firstSyl.isClosed,
        isFinal: firstSyl.isFinal
      });
    } else {
      const lastSyl = syls[numOfSyls - 1];
      while (index < latin.length) {
        partial.push(latin[index].cluster);
        index++;
      }
      syls[numOfSyls - 1] = new Syllable([...lastSyl.clusters, ...partial], {
        isAccented: lastSyl.isAccented,
        isClosed: lastSyl.isClosed,
        isFinal: lastSyl.isFinal
      });
    }
  }
  return syls;
};
var syllabify = (clusters, options, isWordInConstruct) => {
  const removeLatin = clusters.filter((cluster) => !cluster.isNotHebrew);
  const latinClusters = clusters.map(clusterPos).filter((c) => c.cluster.isNotHebrew);
  const groupedClusters = groupClusters(removeLatin, options);
  const syllables = groupedClusters.map((group) => group instanceof Syllable ? group : new Syllable([group]));
  const [first, ...rest] = syllables;
  first.siblings = rest;
  syllables[syllables.length - 1].isFinal = true;
  syllables.forEach(setIsClosed);
  syllables.forEach(setIsAccented);
  if (!syllables.map((s) => s.isAccented).includes(true) && !isWordInConstruct) {
    syllables[syllables.length - 1].isAccented = true;
  }
  syllables.forEach((s) => s.clusters.forEach((c) => c.syllable = s));
  return latinClusters.length ? reinsertLatin(syllables, latinClusters) : syllables;
};

// node_modules/havarotjs/dist/esm/word.js
var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Word_instances;
var _Word_nonCharacters;
var _Word_text;
var _Word_original;
var _Word_sylOpts;
var _Word_makeClusters;
var Word = class extends Node {
  constructor(text, sylOpts, original) {
    super();
    _Word_instances.add(this);
    _Word_nonCharacters.set(this, /[^\u{05D0}-\u{05F4}]/gu);
    _Word_text.set(this, void 0);
    _Word_original.set(this, void 0);
    _Word_sylOpts.set(this, void 0);
    this.value = this;
    __classPrivateFieldSet4(this, _Word_text, text, "f");
    __classPrivateFieldSet4(this, _Word_original, original ?? text, "f");
    const startMatch = text.match(/^\s*/g);
    const endMatch = text.match(/\s*$/g);
    this.whiteSpaceBefore = startMatch ? startMatch[0] : null;
    this.whiteSpaceAfter = endMatch ? endMatch[0] : null;
    __classPrivateFieldSet4(this, _Word_sylOpts, sylOpts, "f");
  }
  /**
   * Gets all the {@link Char | Characters} in the Word
   *
   * @returns a one dimensional array of Chars
   *
   * @example
   * ```ts
   * const text = new Text("אֵיפֹה־אַתָּה מֹשֶה");
   * text.words[0].chars;
   * // [
   * //    Char { original: "א" },
   * //    Char { original: "ֵ" }, (tsere)
   * //    Char { original: "פ" },
   * //    Char { original: "ֹ" }, (holem)
   * //    Char { original: "ה"},
   * //    Char { original: "־" }
   * //  ]
   * ```
   */
  get chars() {
    return this.clusters.map((cluster) => cluster.chars).flat();
  }
  /**
   * Gets all the {@link Cluster | Clusters} in the Word
   *
   * @returns a one dimensional array of Clusters
   *
   * @example
   * ```ts
   * const text = new Text("אֵיפֹה־אַתָּה מֹשֶה");
   * text.words[0].clusters;
   * // [
   * //    Cluster { original: "אֵ" },
   * //    Cluster { original: "י" },
   * //    Cluster { original: "פֹ" },
   * //    Cluster { original: "ה־" }
   * //  ]
   * ```
   */
  get clusters() {
    const clusters = __classPrivateFieldGet4(this, _Word_instances, "m", _Word_makeClusters).call(this, this.text);
    const firstCluster = clusters[0];
    const remainder = clusters.slice(1);
    firstCluster.siblings = remainder;
    return clusters;
  }
  /**
   * Gets all the consonant characters in the Word
   *
   * @returns a one dimensional array of all the consonant characters in the Word
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.words[0].consonants;
   * // ["ה", "א", "ר", "ץ"]
   * ```
   */
  get consonants() {
    return this.clusters.map((cluster) => cluster.consonants).flat();
  }
  /**
   * Gets all the consonant character names in the Word
   *
   * @returns a one dimensional array of all the consonant character names in the Word
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.words[0].consonantNames;
   * // ["HE", "ALEF", "RESH", "FINAL_TSADI"]
   * ```
   */
  get consonantNames() {
    return this.clusters.map((cluster) => cluster.consonantNames).flat();
  }
  /**
   * Checks if the word contains the consonant character of the name passed in
   *
   * @returns a boolean indicating if the word contains the consonant character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.words[0].hasConsonantName("HE");
   * // true
   * text.words[0].hasConsonantName("MEM");
   * // false
   * ```
   *
   * @remarks
   * This checks if the syllable contains the given consonant name, even if the character is not a phonemic consonant (i.e a mater).
   */
  hasConsonantName(name) {
    return this.clusters.some((cluster) => cluster.hasConsonantName(name));
  }
  /**
   * Checks if the word has a form of the Divine Name (i.e the tetragrammaton)
   *
   * @returns a boolean indicating if the word has a form of the Divine Name
   *
   * @example
   * ```ts
   * const text = new Text("בַּֽיהוָ֔ה");
   * text.words[0].hasDivineName;
   * // true
   * ```
   */
  get hasDivineName() {
    return /יהוה/.test(this.text.replace(__classPrivateFieldGet4(this, _Word_nonCharacters, "f"), ""));
  }
  /**
   * Checks if the word contains the taamim character of the name passed in
   *
   * @returns a boolean indicating if the word contains the taamim character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.word[0].hasTaamName("TIPEHA");
   * // true
   * ```
   *
   * @remarks
   * Note: it only checks according to the character name, not its semantic meaning.
   * E.g. "כֵֽן׃" would be `true` when checking for `"METEG"`, not silluq
   */
  hasTaamName(name) {
    return this.syllables.some((syllable) => syllable.hasTaamName(name));
  }
  /**
   * Checks if the word contains the vowel character of the name passed in
   *
   * @returns a boolean indicating if the word contains the vowel character of the name passed in
   *
   * @example
   * ```ts
   * const text = new Text("הַיְחָבְרְךָ")'
   * text.word[0].hasVowelName("PATAH");
   * // true
   *
   * // test for vocal sheva
   * text.word[0].hasVowelName("SHEVA");
   * // true
   *
   * // test for silent sheva
   * text.word[0].hasVowelName("SHUREQ");
   * // false
   * ```
   *
   * @remarks
   * This returns a boolean if the vowel character is present, even for most mater lectionis (e.g. in a holam vav construction, "HOLAM" would return true).
   * The only exception is a shureq, because there is no vowel character for a shureq.
   * According to [Syllabification](/guides/syllabification), a sheva is a vowel and serves as the nucleus of a syllable.
   * It returns `true` for "SHEVA" only when the sheva is the vowel (i.e. a vocal sheva or sheva na').
   */
  hasVowelName(name) {
    return this.syllables.some((syllable) => syllable.hasVowelName(name));
  }
  /**
   * Checks if the text is a form of the Divine Name (i.e the tetragrammaton)
   *
   * @returns a boolean indicating if the text is a form of the Divine Name
   *
   * @example
   * ```ts
   * const text = new Text("יְהוָה");
   * text.words[0].isDivineName;
   * // true
   * ```
   */
  get isDivineName() {
    return this.text.replace(__classPrivateFieldGet4(this, _Word_nonCharacters, "f"), "") === "\u05D9\u05D4\u05D5\u05D4";
  }
  /**
   * Checks if the Word contains non-Hebrew characters
   *
   * @returns a boolean indicating if the Word contains non-Hebrew characters
   *
   * @example
   * ```ts
   * const text = new Text("Hi!");
   * text.words[0].isNotHebrew;
   * // true
   * ```
   *
   * @remarks
   * If the word contains non-Hebrew characters, it is not considered Hebrew because syllabification is likely not correct.
   */
  get isNotHebrew() {
    return !this.clusters.map((c) => c.isNotHebrew).includes(false);
  }
  /**
   * Checks if the Word is in a construct state
   *
   * @returns a boolean indicating if the Word is in a construct state
   *
   * @example
   * ```ts
   * const text = new Text("בֶּן־אָדָ֕ם");
   * text.words[0].isInConstruct;
   * // true
   * ```
   *
   * @remarks
   * The construct state is indicated by the presence of a maqqef (U+05BE) character
   */
  get isInConstruct() {
    return this.text.includes("\u05BE");
  }
  /**
   * The original string passed
   *
   * @returns the original string passed
   *
   * @description
   * The original string passed to the constructor that has not been checked against any KetivQeres.
   *
   * @remarks
   * The original string passed to the constructor still undergoes the normalization and sequence process, just not checked against any KetivQeres.
   */
  get original() {
    return __classPrivateFieldGet4(this, _Word_original, "f").trim();
  }
  /**
   * Gets all the {@link Syllable | Syllables} in the Word
   *
   * @returns a one dimensional array of Syllables
   *
   * @example
   * ```ts
   * const text = new Text("אֵיפֹה־אַתָּה מֹשֶה");
   * text.words[0].syllables;
   * // [
   * //    Syllable { original: "אֵי" },
   * //    Syllable { original: "פֹה־" }
   * //  ]
   * ```
   */
  get syllables() {
    if (/\w/.test(this.text) || this.isDivineName || this.isNotHebrew) {
      const syl = new Syllable(this.clusters);
      syl.word = this;
      return [syl];
    }
    const syllables = syllabify(this.clusters, __classPrivateFieldGet4(this, _Word_sylOpts, "f"), this.isInConstruct);
    syllables.forEach((syl) => syl.word = this);
    return syllables;
  }
  /**
   * Gets all the taamim characters in the Word
   *
   * @returns a one dimensional array of all the taamim characters in the Word
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.words[0].taamim;
   * // ["\u{596}"];
   * ```
   */
  get taamim() {
    return this.syllables.map((syl) => syl.taamim).flat();
  }
  /**
   * Gets all the taamim names in the Word
   *
   * @returns a one dimensional array of all the taamim names in the Word
   *
   * @example
   * ```ts
   * const text = new Text("הָאָ֖רֶץ");
   * text.words[0].taamimNames;
   * // ["TIPEHA"];
   * ```
   */
  get taamimNames() {
    return this.syllables.map((syl) => syl.taamimNames).flat();
  }
  /**
   * Gets the text of the Word
   *
   * @returns the word's text trimmed of any whitespace characters
   *
   * @example
   * ```ts
   * const text = new Text("אֵיפֹה־אַתָּה מֹשֶה");
   * const words = text.words.map((word) => word.text);
   * words;
   * // [
   * //    "אֵיפֹה־",
   * //    "אַתָּה",
   * //    "מֹשֶׁה"
   * //  ]
   * ```
   */
  get text() {
    return __classPrivateFieldGet4(this, _Word_text, "f").trim();
  }
  /**
   * Gets all the vowel names in the Word
   *
   * @returns an array of all the vowel names in the Word
   *
   * @example
   * ```ts
   * const text = new Text("אֵיפֹה־אַתָּה מֹשֶה");
   * text.words[0].vowelNames;
   * // ["HOLAM", "SEGOL"];
   * ```
   */
  get vowelNames() {
    return this.syllables.map((syl) => syl.vowelNames).flat();
  }
  /**
   * Gets all the vowel characters in the Word
   *
   * @returns an array of all the vowel characters in the Word
   *
   * @example
   * ```ts
   * const text = new Text("אֵיפֹה־אַתָּה מֹשֶה");
   * text.words[0].vowels;
   * // ["\u{5B9}", "\u{5B6}"];
   * ```
   */
  get vowels() {
    return this.syllables.map((syl) => syl.vowels).flat();
  }
};
_Word_nonCharacters = /* @__PURE__ */ new WeakMap(), _Word_text = /* @__PURE__ */ new WeakMap(), _Word_original = /* @__PURE__ */ new WeakMap(), _Word_sylOpts = /* @__PURE__ */ new WeakMap(), _Word_instances = /* @__PURE__ */ new WeakSet(), _Word_makeClusters = function _Word_makeClusters2(word) {
  const match = word.match(jerusalemTest);
  if (match?.groups) {
    const captured = match[0];
    const { hiriq, vowel, taamimMatch, mem } = match.groups;
    const partial = word.replace(captured, `${vowel}${taamimMatch}`);
    return [...partial.split(clusterSplitGroup), `${hiriq}${mem}`].map((group) => {
      if (group === `${hiriq}${mem}`) {
        return new Cluster(group, true);
      }
      return new Cluster(group);
    });
  }
  return word.split(clusterSplitGroup).map((group) => new Cluster(group));
};

// node_modules/havarotjs/dist/esm/text.js
var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Text_instances;
var _a3;
var _Text_original;
var _Text_options;
var _Text_ketivQereCache;
var _Text_applyKetivQere;
var _Text_captureTaamim;
var _Text_processKetivQeres;
var _Text_validateInput;
var _Text_validateKetivQeres;
var _Text_validateOptions;
var _Text_removeTaamim;
var _Text_setOptions;
var _Text_setTaamim;
var _Text_taamimCaptureGroup_get;
var _Text_normalized_get;
var _Text_sanitized_get;
var Text = class {
  /**
   * `Text` requires an input string,
   * and has optional arguments for syllabification,
   * which can be read about in the [Syllabification](/guides/syllabification) page
   *
   * @param text input string
   * @param options syllabification options
   */
  constructor(text, options = {}) {
    _Text_instances.add(this);
    _Text_original.set(this, void 0);
    _Text_options.set(this, void 0);
    _Text_ketivQereCache.set(this, {});
    __classPrivateFieldSet5(this, _Text_options, __classPrivateFieldGet5(this, _Text_instances, "m", _Text_setOptions).call(this, options), "f");
    __classPrivateFieldSet5(this, _Text_original, __classPrivateFieldGet5(this, _Text_options, "f").allowNoNiqqud ? text : __classPrivateFieldGet5(this, _Text_instances, "m", _Text_validateInput).call(this, text), "f");
  }
  /**
   * Gets all the {@link Char | Chars} in the Text
   *
   * @returns a one dimensional array of Chars
   *
   * ```typescript
   * const text: Text = new Text("יָד");
   * text.chars;
   * //  [
   * //    Char { original: "י" },
   * //    Char { original: "ָ" },
   * //    Char { original: "ד" }
   * //  ]
   * ```
   */
  get chars() {
    return this.clusters.map((cluster) => cluster.chars).flat();
  }
  /**
   * Gets all the {@link Cluster | Clusters} in the Text
   *
   * @returns a one dimensional array of Clusters
   *
   * ```typescript
   * const text: Text = new Text("יָד");
   * text.clusters;
   * // [
   * //    Cluster { original: "יָ" },
   * //    Cluster { original: "ד" }
   * //  ]
   * ```
   */
  get clusters() {
    return this.syllables.map((syllable) => syllable.clusters).flat();
  }
  /**
   * The original string passed
   *
   * @returns the original string passed
   *
   * @remarks
   * The original string passed to the constructor that has not been normalized or sequenced. See {@link text}
   */
  get original() {
    return __classPrivateFieldGet5(this, _Text_original, "f");
  }
  /**
   * Gets all the {@link Syllable | Syllables} in the Text
   *
   * @returns a one dimensional array of Syllables
   *
   * ```typescript
   * const text: Text = new Text("הֲבָרֹות");
   * text.syllables;
   * // [
   * //    Syllable { original: "הֲ" },
   * //    Syllable { original: "בָ" },
   * //    Syllable { original: "רֹות" }
   * //  ]
   * ```
   */
  get syllables() {
    return this.words.map((word) => word.syllables).flat();
  }
  /**
   * Gets the text
   *
   * @returns a string that has been decomposed, sequenced, qamets qatan patterns converted to the appropriate unicode character (U+05C7), and holem-waw sequences corrected
   *
   * @example
   * ```ts
   * import { Text } from "havarotjs";
   * const text = new Text("וַתָּשָׁב");
   * text.text;
   * // וַתָּשׇׁב
   * ```
   */
  get text() {
    return this.words.reduce((a, c) => `${a}${c.text}${c.whiteSpaceAfter ?? ""}`, "");
  }
  /**
   * Gets all the {@link Word | Words} in the Text
   *
   * @returns a one dimensional array of Words
   *
   * @example
   * ```ts
   * const text = new Text("הֲבָרֹות");
   * text.words;
   * // [ Word { original: "הֲבָרֹות" } ]
   * ```
   */
  get words() {
    const split = __classPrivateFieldGet5(this, _Text_instances, "a", _Text_sanitized_get).split(splitGroup);
    const groups = split.filter((group) => group);
    const words = groups.map((original) => {
      const word = __classPrivateFieldGet5(this, _Text_instances, "m", _Text_processKetivQeres).call(this, original);
      return new Word(word, __classPrivateFieldGet5(this, _Text_options, "f"), word !== original ? original : void 0);
    });
    const [first, ...rest] = words;
    first.siblings = rest;
    return words;
  }
};
_a3 = Text, _Text_original = /* @__PURE__ */ new WeakMap(), _Text_options = /* @__PURE__ */ new WeakMap(), _Text_ketivQereCache = /* @__PURE__ */ new WeakMap(), _Text_instances = /* @__PURE__ */ new WeakSet(), _Text_applyKetivQere = function _Text_applyKetivQere2(text, kq) {
  const input = kq.input ?? kq.ketiv;
  const output = kq.output ?? kq.qere;
  if (input instanceof RegExp) {
    const match = text.match(kq.input);
    if (match) {
      return typeof output === "string" ? output : output(text, input);
    }
  }
  if (input === text) {
    return typeof output === "string" ? output : output(text, input);
  }
  return null;
}, _Text_captureTaamim = function _Text_captureTaamim2(text) {
  return text.matchAll(__classPrivateFieldGet5(_a3, _a3, "a", _Text_taamimCaptureGroup_get));
}, _Text_processKetivQeres = function _Text_processKetivQeres2(text) {
  if (__classPrivateFieldGet5(this, _Text_ketivQereCache, "f")[text]) {
    return __classPrivateFieldGet5(this, _Text_ketivQereCache, "f")[text];
  }
  const ketivQeres = __classPrivateFieldGet5(this, _Text_options, "f").ketivQeres;
  if (!ketivQeres?.length) {
    return text;
  }
  for (const ketivQere of ketivQeres) {
    const startMatch = text.match(/^\s*/g) ?? "";
    const endMatch = text.match(/\s*$/g);
    const whiteSpaceBefore = startMatch ? startMatch[0] : null;
    const whiteSpaceAfter = endMatch ? endMatch[0] : null;
    const textWithoutTaamim = (ketivQere.ignoreTaamim ? __classPrivateFieldGet5(this, _Text_instances, "m", _Text_removeTaamim).call(this, text) : text).trim();
    const appliedKetivQere = __classPrivateFieldGet5(this, _Text_instances, "m", _Text_applyKetivQere).call(this, textWithoutTaamim, ketivQere);
    if (!appliedKetivQere) {
      return whiteSpaceBefore + text + whiteSpaceAfter;
    }
    const taamimChars = ketivQere.captureTaamim ? __classPrivateFieldGet5(this, _Text_instances, "m", _Text_captureTaamim).call(this, text) : null;
    const newText = taamimChars ? __classPrivateFieldGet5(this, _Text_instances, "m", _Text_setTaamim).call(this, appliedKetivQere, taamimChars) : appliedKetivQere;
    __classPrivateFieldGet5(this, _Text_ketivQereCache, "f")[text] = newText;
    return whiteSpaceBefore + newText + whiteSpaceAfter;
  }
  return text;
}, _Text_validateInput = function _Text_validateInput2(text) {
  const niqqud = /[\u{05B0}-\u{05BC}\u{05C7}]/u;
  if (!niqqud.test(text)) {
    throw new Error("Text must contain niqqud");
  }
  return text;
}, _Text_validateKetivQeres = function _Text_validateKetivQeres2(ketivQeres) {
  if (!ketivQeres) {
    return true;
  }
  if (!ketivQeres.length) {
    return true;
  }
  for (const [index, ketivQere] of ketivQeres.entries()) {
    let { input, output } = ketivQere;
    const { ketiv, qere, ignoreTaamim, captureTaamim } = ketivQere;
    if (!input && ketiv) {
      input = ketiv;
    }
    if (input === void 0) {
      throw new Error(`The ketivQere at index ${index} must have an input`);
    }
    if (!(input instanceof RegExp) && typeof input !== "string") {
      throw new Error(`The input property of the ketivQere at index ${index} must be a string or RegExp`);
    }
    if (!output && qere) {
      output = qere;
    }
    if (output === void 0) {
      throw new Error(`The ketivQere at index ${index} must have an output`);
    }
    if (typeof output !== "string" && typeof output !== "function") {
      throw new Error(`The output property of the ketivQere at index ${index} must be a string or function`);
    }
    if (ignoreTaamim && typeof ignoreTaamim !== "boolean") {
      throw new Error(`The ignoreTaamim property of the ketivQere at index ${index} must be a boolean`);
    }
    if (captureTaamim && typeof captureTaamim !== "boolean") {
      throw new Error(`The captureTaamim property of the ketivQere at index ${index} must be a boolean`);
    }
  }
  return true;
}, _Text_validateOptions = function _Text_validateOptions2(options) {
  const validOpts = [
    "allowNoNiqqud",
    "article",
    "holemHaser",
    "ketivQeres",
    "longVowels",
    "qametsQatan",
    "shevaAfterMeteg",
    "shevaWithMeteg",
    "sqnmlvy",
    "strict",
    "wawShureq"
  ];
  for (const [k, v] of Object.entries(options)) {
    if (!validOpts.includes(k)) {
      throw new Error(`${k} is not a valid option`);
    }
    if (k === "ketivQeres") {
      __classPrivateFieldGet5(this, _Text_instances, "m", _Text_validateKetivQeres).call(this, v);
      continue;
    }
    if (k === "holemHaser" && !["update", "preserve", "remove"].includes(String(v))) {
      throw new Error(`The value ${String(v)} is not a valid option for ${k}`);
    }
    if (typeof v !== "boolean" && k !== "holemHaser") {
      throw new Error(`The value ${String(v)} is not a valid option for ${k}`);
    }
  }
  return options;
}, _Text_removeTaamim = function _Text_removeTaamim2(text) {
  return text.replace(taamim, "");
}, _Text_setOptions = function _Text_setOptions2(options) {
  const validOpts = __classPrivateFieldGet5(this, _Text_instances, "m", _Text_validateOptions).call(this, options);
  return {
    allowNoNiqqud: validOpts.allowNoNiqqud ?? false,
    article: validOpts.article ?? true,
    holemHaser: validOpts.holemHaser ?? "preserve",
    ketivQeres: validOpts.ketivQeres?.map((kq) => ({
      ...kq,
      captureTaamim: kq.captureTaamim ?? false,
      ignoreTaamim: kq.ignoreTaamim ?? true
    })) ?? [],
    longVowels: validOpts.longVowels ?? true,
    qametsQatan: validOpts.qametsQatan ?? true,
    shevaAfterMeteg: validOpts.shevaAfterMeteg ?? true,
    shevaWithMeteg: validOpts.shevaWithMeteg ?? true,
    sqnmlvy: validOpts.sqnmlvy ?? true,
    strict: validOpts.strict ?? true,
    wawShureq: validOpts.wawShureq ?? true
  };
}, _Text_setTaamim = function _Text_setTaamim2(newText, taamimCapture) {
  return [...taamimCapture].reduce((text, group) => {
    return text.slice(0, group.index) + group[1] + text.slice(group.index);
  }, newText);
}, _Text_taamimCaptureGroup_get = function _Text_taamimCaptureGroup_get2() {
  return taamimCaptureGroup;
}, _Text_normalized_get = function _Text_normalized_get2() {
  return this.original.normalize("NFKD");
}, _Text_sanitized_get = function _Text_sanitized_get2() {
  const text = __classPrivateFieldGet5(this, _Text_instances, "a", _Text_normalized_get).trim();
  const sequencedChar = sequence(text).flat();
  const sequencedText = sequencedChar.reduce((a, c) => a + c.text, "");
  const textArr = sequencedText.split(splitGroup).filter((group) => group);
  const mapQQatan = __classPrivateFieldGet5(this, _Text_options, "f").qametsQatan ? textArr.map(convertsQametsQatan) : textArr;
  const mapHolemWaw = mapQQatan.map((w) => holemWaw(w, __classPrivateFieldGet5(this, _Text_options, "f")));
  return mapHolemWaw.join("");
};

// node_modules/hebrew-transliteration/dist/esm/sequence.js
var vowels2 = /[\u{05B0}-\u{05BC}\u{05C7}]/u;
var sequence2 = (text, qametsQatan = false) => {
  return vowels2.test(text) ? new Text(text, { qametsQatan }).text : text;
};

// node_modules/hebrew-transliteration/dist/esm/remove.js
var removeMap = {
  ETNAHTA: "\u0591",
  // U+0591 HEBREW ACCENT ETNAHTA
  SEGOLTA: "\u0592",
  // U+0592 HEBREW ACCENT SEGOL
  SHALSHELET: "\u0593",
  // U+0593 HEBREW ACCENT SHALSHELET
  ZAQEF_QATAN: "\u0594",
  // U+0594 HEBREW ACCENT ZAQEF QATAN
  ZAQEF_GADOL: "\u0595",
  // U+0595 HEBREW ACCENT ZAQEF GADOL
  TIPEHA: "\u0596",
  // U+0596 HEBREW ACCENT TIPEHA
  REVIA: "\u0597",
  // U+0597 HEBREW ACCENT REVIA
  ZARQA: "\u0598",
  // U+0598 HEBREW ACCENT ZARQA
  PASHTA: "\u0599",
  // U+0599 HEBREW ACCENT PASHTA
  YETIV: "\u059A",
  // U+059A HEBREW ACCENT YETIV
  TEVIR: "\u059B",
  // U+059B HEBREW ACCENT TEVIR
  GERESH: "\u059C",
  // U+059C HEBREW ACCENT GERESH
  GERESH_MUQDAM: "\u059D",
  // U+059D HEBREW ACCENT GERESH MUQDAM
  GERSHAYIM: "\u059E",
  // U+059E HEBREW ACCENT GERSHAYIM
  QARNEY_PARA: "\u059F",
  // U+059F HEBREW ACCENT QARNEY PARA
  TELISHA_GEDOLA: "\u05A0",
  // U+05A0 HEBREW ACCENT TELISHA GEDOLA
  PAZER: "\u05A1",
  // U+05A1 HEBREW ACCENT PAZER
  ATNAH_HAFUKH: "\u05A2",
  // U+05A2 HEBREW ACCENT ATNAH HAFUKH
  MUNAH: "\u05A3",
  // U+05A3 HEBREW ACCENT MUNAH
  MAHAPAKH: "\u05A4",
  // U+05A4 HEBREW ACCENT MAHAPAKH
  MERKHA: "\u05A5",
  // U+05A5 HEBREW ACCENT MERKHA
  MERKHA_KEFULA: "\u05A6",
  // U+05A6 HEBREW ACCENT MERKHA KEFULA
  DARGA: "\u05A7",
  // U+05A7 HEBREW ACCENT DARGA
  QADMA: "\u05A8",
  // U+05A8 HEBREW ACCENT QADMA
  TELISHA_QETANA: "\u05A9",
  // U+05A9 HEBREW ACCENT TELISHA QETANA
  YERAH_BEN_YOMO: "\u05AA",
  // U+05AA HEBREW ACCENT YERAH BEN YOMO
  OLE: "\u05AB",
  // U+05AB HEBREW ACCENT OLE
  ILUY: "\u05AC",
  // U+05AC HEBREW ACCENT ILUY
  DEHI: "\u05AD",
  // U+05AD HEBREW ACCENT DEHI
  ZINOR: "\u05AE",
  // U+05AE HEBREW ACCENT ZINOR
  SHEVA: "\u05B0",
  // HEBREW POINT SHEVA
  HATAF_SEGOL: "\u05B1",
  // HEBREW POINT HATAF SEGOL
  HATAF_PATAH: "\u05B2",
  // HEBREW POINT HATAF PATAH
  HATAF_QAMATS: "\u05B3",
  // HEBREW POINT HATAF QAMATS
  HIRIQ: "\u05B4",
  // HEBREW POINT HIRIQ
  TSERE: "\u05B5",
  // HEBREW POINT TSERE
  SEGOL: "\u05B6",
  // HEBREW POINT SEGOL
  PATAH: "\u05B7",
  // HEBREW POINT PATAH
  QAMATS: "\u05B8",
  // HEBREW POINT QAMATS
  HOLAM: "\u05B9",
  // HEBREW POINT HOLAM
  // below is not needed because sequnce() does not output this
  // HOLAM_HASER_FOR_VAV: "\u{05BA}", // HEBREW POINT HOLAM HASER FOR VAV
  QUBUTS: "\u05BB",
  // HEBREW POINT QUBUTS
  DAGESH: "\u05BC",
  // HEBREW POINT DAGESH OR MAPIQ
  METEG: "\u05BD",
  // HEBREW POINT METEG
  RAFE: "\u05BF",
  // HEBREW POINT RAFE
  SHIN_DOT: "\u05C1",
  // HEBREW POINT SHIN DOT
  SIN_DOT: "\u05C2",
  // HEBREW POINT SIN DOT
  QAMATS_QATAN: "\u05C7",
  // HEBREW POINT QAMATS QATAN
  MAQAF: "\u05BE",
  // HEBREW PUNCTUATION MAQAF
  PASEQ: "\u05C0",
  // HEBREW PUNCTUATION PASEQ
  SOF_PASUQ: "\u05C3",
  // HEBREW PUNCTUATION SOF_PASUQ
  NUN_HAFUKHA: "\u05C6",
  // HEBREW PUNCTUATION NUN_HAFUKHA
  PUNC_GERESH: "\u05F3",
  // HEBREW PUNCTUATION GERESH
  PUNC_GERSHAYIM: "\u05F4",
  // HEBREW PUNCTUATION GERSHAYIM
  MASORA_CIRCLE: "\u05AF",
  // U+MASORA CIRCLE HEBREW MARK 05AF,
  UPPER_DOT: "\u05C4",
  // U+UPPER DOT HEBREW MARK 05C4,
  LOWER_DOT: "\u05C5"
  // U+LOWER DOT HEBREW MARK 05C5];
};
var accents = {
  ETNAHTA: true,
  SEGOLTA: true,
  SHALSHELET: true,
  ZAQEF_QATAN: true,
  ZAQEF_GADOL: true,
  TIPEHA: true,
  REVIA: true,
  ZARQA: true,
  PASHTA: true,
  YETIV: true,
  TEVIR: true,
  GERESH: true,
  GERESH_MUQDAM: true,
  GERSHAYIM: true,
  QARNEY_PARA: true,
  TELISHA_GEDOLA: true,
  PAZER: true,
  ATNAH_HAFUKH: true,
  MUNAH: true,
  MAHAPAKH: true,
  MERKHA: true,
  MERKHA_KEFULA: true,
  DARGA: true,
  QADMA: true,
  TELISHA_QETANA: true,
  YERAH_BEN_YOMO: true,
  OLE: true,
  ILUY: true,
  DEHI: true,
  ZINOR: true
};
var points = {
  SHEVA: true,
  HATAF_SEGOL: true,
  HATAF_PATAH: true,
  HATAF_QAMATS: true,
  HIRIQ: true,
  TSERE: true,
  SEGOL: true,
  PATAH: true,
  QAMATS: true,
  HOLAM: true,
  QUBUTS: true,
  DAGESH: true,
  SHIN_DOT: true,
  SIN_DOT: true,
  METEG: true,
  RAFE: true,
  QAMATS_QATAN: true
};
var punctuation2 = {
  MAQAF: true,
  PASEQ: true,
  SOF_PASUQ: true,
  NUN_HAFUKHA: true,
  PUNC_GERESH: true,
  PUNC_GERSHAYIM: true
};
var marks = {
  MASORA_CIRCLE: true,
  UPPER_DOT: true,
  LOWER_DOT: true
};
var all = {
  ...accents,
  ...points,
  ...punctuation2,
  ...marks
};
var remove = (text, options = { ...accents, METEG: true, RAFE: true }) => {
  const keys = Object.keys(options).filter((k) => k in options ? options[k] : false);
  const sequenced = sequence2(text);
  return keys.reduce((a, c) => {
    const key = removeMap[c] ?? null;
    if (key) {
      const replacement = key === "\u05BE" ? " " : "";
      return a.replace(new RegExp(key, "gu"), replacement);
    }
    return a;
  }, sequenced);
};

// node_modules/hebrew-transliteration/dist/esm/schema.js
var Schema = class {
  /**
   * HEBREW POINT SHEVA (U+05B0) ְ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   VOCAL_SHEVA: "ə",
   * });
   * transliterate("סְלִ֣ק", schema);
   * // səliq
   * ```
   */
  VOCAL_SHEVA;
  /**
   * HEBREW POINT HATAF SEGOL (U+05B1) ֱ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HATAF_SEGOL: "ĕ",
   * });
   * transliterate("אֱלֹהִ֑ים", schema);
   * // ʾĕlōhîm
   * ```
   */
  HATAF_SEGOL;
  /**
   * HEBREW POINT HATAF PATAH (U+05B2) ֲ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HATAF_PATAH: "ă",
   * });
   * transliterate("נַֽעֲשֶׂ֥ה", schema);
   * // naʿăśê
   * ```
   */
  HATAF_PATAH;
  /**
   * HEBREW POINT HATAF QAMATS (U+05B3) ֳ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HATAF_QAMATS: "ŏ",
   * });
   * transliterate("אֳרָנִים", schema);
   * // ʾŏrānîm
   * ```
   */
  HATAF_QAMATS;
  /**
   * HEBREW POINT HIRIQ (U+05B4) ִ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HIRIQ: "i",
   * });
   * transliterate("הִנֵּה֩", schema);
   * // hinnê
   * ```
   */
  HIRIQ;
  /**
   * HEBREW POINT TSERE (U+05B5) ֵ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TSERE: "ē",
   * });
   * transliterate("אֵשׁ", schema);
   * // ʾēš
   * ```
   */
  TSERE;
  /**
   * HEBREW POINT SEGOL (U+05B6) ֶ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SEGOL: "e",
   * });
   * transliterate("אֶל", schema);
   * // ʾel
   * ```
   */
  SEGOL;
  /**
   * HEBREW POINT PATAH (U+05B7) ַ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   PATAH: "a",
   * });
   * transliterate("נַ֗עַר", schema);
   * // naʿar
   * ```
   */
  PATAH;
  /**
   * HEBREW POINT QAMATS (U+05B8) ָ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   QAMATS: "ā",
   * });
   * transliterate("דָבָר֙", schema);
   * // dābār
   * ```
   */
  QAMATS;
  /**
   * HEBREW POINT HOLAM (U+05B9) ֹ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HOLAM: "ō",
   * });
   * transliterate("לֹא", schema);
   * // lōʾ
   * ```
   */
  HOLAM;
  /**
   * HEBREW POINT HOLAM HASER FOR VAV (U+05BA) ֹ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HOLAM_HASER: "ō",
   * });
   * transliterate("עָוֺן֙", schema);
   * // ʿāwōn
   * ```
   *
   * @remarks
   * See {@link holemHaser} for more about this character
   */
  HOLAM_HASER;
  /**
   * HEBREW POINT QUBUTS (U+05BB) ֻ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   QUBUTS: "u",
   * });
   * transliterate("קֻ֣ם", schema);
   * // qūm
   * ```
   */
  QUBUTS;
  /**
   * HEBREW POINT DAGESH OR MAPIQ (U+05BC) ּ◌
   *
   * @category Marks
   *
   * @example
   * A blank string
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DAGESH: "",
   * });
   * transliterate("כֵּ֑ן", schema);
   * // kēn
   * ```
   *
   * @example
   * A character
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DAGESH: ".",
   * });
   * transliterate("כֵּ֑ן", schema);
   * // k.ēn
   * ```
   *
   * @remarks
   * Typically, this should be a blank string.
   */
  DAGESH;
  /**
   * HEBREW POINT DAGESH OR MAPIQ (U+05BC) ּ◌
   *
   * A string or boolean, and if set to `true`, the consonant with the dagesh is repeated.
   *
   * @category Marks
   * @category Orthographic Features
   *
   * @example
   * As a string
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DAGESH_CHAZAQ: "\u0301",
   * });
   * transliterate("שַׁבָּת", schema);
   * // šab́āt
   * ```
   *
   * @example
   * As a boolean
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DAGESH_CHAZAQ: true,
   * });
   * transliterate("שַׁבָּת", schema);
   * // šabbāt
   * ```
   */
  DAGESH_CHAZAQ;
  /**
   * HEBREW PUNCTUATION MAQAF (U+05BE) ־◌
   *
   * @category Marks
   * @category Taamim
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   { MAQAF: "-" }
   * });
   * transliterate("אַל־", schema);
   * // ʾal-
   * ```
   */
  MAQAF;
  /**
   * HEBREW PUNCTUATION PASEQ (U+05C0) ׀ ◌
   *
   * @category Marks
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   PASEQ: "",
   })
   * transliterate("כְּשֶׁ֣בֶת ׀ הַמֶּ֣לֶךְ", schema);
   * // kəšebet  hammelek
   * ```
   *
   * @remarks
   * If a blank string, two spaces will occur between words; see example.
   */
  PASEQ;
  /**
   * HEBREW PUNCTUATION SOF PASUQ (U+05C3) ׃◌
   *
   * @category Marks
   * @category Taamim
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SOF_PASUQ: ".",
   * });
   * transliterate("הָאָֽרֶץ׃", schema);
   * // hāʾāreṣ.
   * ```
   */
  SOF_PASUQ;
  /**
   * HEBREW POINT QAMATS QATAN (U+05C7) ׇ◌
   *
   * @category Vowels
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   QAMATS QATAN: "o",
   * });
   * transliterate("כָּל־הָעָ֖ם", schema);
   * // kol-hāʿām
   * ```
   *
   * @remarks
   * See {@link qametsQatan} for details about this character.
   */
  QAMATS_QATAN;
  /**
   * HEBREW POINT PATAH (U+05B7) ◌ַ  as a furtive patah
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   FURTIVE_PATAH: "a",
   * });
   * transliterate("נֹ֖חַ", schema);
   * // nōaḥ
   * ```
   */
  FURTIVE_PATAH;
  /**
   * HEBREW POINT HIRIQ (U+05B4) and YOD (U+05D9) י◌ִ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HIRIQ_YOD: "î",
   * });
   * transliterate("עִ֔יר", schema);
   * // ʿîr
   * ```
   */
  HIRIQ_YOD;
  /**
   * HEBREW POINT TSERE (U+05B5) and YOD (U+05D9) י◌ֵ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TSERE_YOD: "ê",
   * });
   * transliterate("אֵ֤ין", schema);
   * // ʾên
   * ```
   */
  TSERE_YOD;
  /**
   * HEBREW POINT SEGOL (U+05B6) and YOD (U+05D9) י◌ֶ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SEGOL_YOD: "ê",
   * });
   * transliterate("אֱלֹהֶ֑יךָ", schema);
   * // ʾĕlōhêkā
   * ```
   */
  SEGOL_YOD;
  /**
   * HEBREW LETTER VAV (U+05D5) and DAGESH (U+05BC) וּ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SHUREQ: "û",
   * });
   * transliterate("קוּם", schema);
   * // qûm
   * ```
   */
  SHUREQ;
  /**
   * HEBREW LETTER HOLAM (U+05B9) and VAV (U+05D5) ֹו◌
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HOLAM_VAV: "ô",
   * });
   * transliterate("ס֣וֹא", schema);
   * // sôʾ
   * ```
   */
  HOLAM_VAV;
  /**
   * HEBREW POINT QAMATS (U+05B8) and HE (U+05D4) ה◌ָ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   QAMATS_HE: "â",
   * });
   * transliterate("עֵצָ֖ה", schema);
   * // ʿēṣâ
   * ```
   */
  QAMATS_HE;
  /**
   * HEBREW POINT PATAH (U+05B7) and HE (U+05D4) ה◌ַ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   PATAH_HE: "â",
   * });
   * transliterate("מַה־", schema);
   * // mâ-
   * ```
   */
  PATAH_HE;
  /**
   * HEBREW POINT SEGOL (U+05B6) and HE (U+05D4) ה◌ֶ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SEGOL_HE: "ê",
   * });
   * transliterate("יִקְרֶ֥ה", schema);
   * // yiqrê
   * ```
   */
  SEGOL_HE;
  /**
   * HEBREW POINT TSERE (U+05B5) and HE (U+05D4) ה◌ֵ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TSERE_HE: "ê",
   * });
   * transliterate("הָאַרְיֵ֔ה", schema);
   * // hāʾaryê
   * ```
   */
  TSERE_HE;
  /**
   * HEBREW LETTER QAMATS (U+05B8) and YOD (U+05D9) and VAV (U+05D5) יו◌ָ
   *
   * @category Vowels
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   MS_SUFX: ”āyw”,
   * });
   * transliterate("יָדָ֛יו", schema);
   * // yādāyw
   * ```
   */
  MS_SUFX;
  /**
   * HEBREW LETTER ALEF (U+05D0) א
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ALEF: "ʾ",
   * });
   * transliterate("אָב", schema);
   * // ʾāb
   * ```
   */
  ALEF;
  /**
   * HEBREW LETTER BET (U+05D1) ב
   *
   * @category Consonants
   *
   * @example
   *  ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   BET: "b",
   * });
   * transliterate("בְּבֵית", schema);
   * // bəbêt
   * ```
   */
  BET;
  /**
   * HEBREW LETTER BET (U+05D1) and DAGESH (U+05BC) ּב
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * With only `BET` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   BET: "b",
   * });
   * transliterate("בְּבֵית", schema);
   * // bəbêt
   *```
   *
   * @example
   * With `BET` and `BET_DAGESH` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   BET: "v",
   *   BET_DAGESH: "b",
   * });
   * transliterate("בְּבֵית", schema);
   * // bəvêt
   * ```
   *
   * @remarks
   * The letter bet with a dagesh kal.
   * Use when need to distinguish between spirantized forms
   */
  BET_DAGESH;
  /**
   * HEBREW LETTER GIMEL (U+05D2) ג
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   GIMEL: "g",
   * });
   * transliterate("גַּ֣גּ", schema);
   * // gag
   * ```
   */
  GIMEL;
  /**
   * HEBREW LETTER GIMEL (U+05D2) and DAGESH (U+05BC) גּ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * With only `GIMEL` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   GIMEL: "g"
   * });
   * transliterate("גַּ֣ג", schema);
   * // gag
   * ```
   *
   * @example
   * With `GIMEL` and `GIMEL_DAGESH` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   GIMEL: "gh",
   *   GIMEL_DAGESH: "g",
   * });
   * transliterate("גַּ֣ג", schema);
   * // gagh
   * ```
   *
   * @remarks
   * The letter gimel with a dagesh kal.
   * Use when need to distinguish between spirantized forms
   */
  GIMEL_DAGESH;
  /**
   * HEBREW LETTER DALET (U+05D3) ד
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DALET: "d",
   * });
   * transliterate("דֹּ֣ד", schema);
   * // dōd
   * ```
   */
  DALET;
  /**
   * HEBREW LETTER DALET (U+05D3) and DAGESH (U+05BC) דּ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * With only `DALET` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DALET: "d",
   * });
   * transliterate("דֹּ֣ד", schema);
   * // dōd
   * ```
   *
   * @example
   * With `DALET` and `DALET_DAGESH` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DALET: "dh",
   *   DALET_DAGESH: "d",
   * });
   * transliterate("דֹּ֣ד", schema);
   * // dōdh
   * ```
   *
   * @remarks
   * The letter dalet with a dagesh kal.
   * Ue when need to distinguish between spirantized forms
   */
  DALET_DAGESH;
  /**
   * HEBREW LETTER HE (U+05D4) ה
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HE: "h",
   * });
   * transliterate("הֵ֗ם", schema);
   * // hēm
   * ```
   */
  HE;
  /**
   * HEBREW LETTER VAV (U+05D5) ו
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   VAV: "w",
   * });
   * transliterate("וָוִ֖ים", schema);
   * // wāwîm
   * ```
   */
  VAV;
  /**
   * HEBREW LETTER ZAYIN (U+05D6) ז
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ZAYIN: "z",
   * });
   * transliterate("זֵ֣ד", schema);
   * // zēd
   * ```
   */
  ZAYIN;
  /**
   * HEBREW LETTER HET (U+05D7) ח
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   HET: "ḥ"
   * });
   * transliterate("חַ֣ג", schema);
   * // ḥag
   * ```
   */
  HET;
  /**
   * HEBREW LETTER TET (U+05D8) ט
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TET: "ṭ",
   * });
   * transliterate("טִֽיט", schema);
   * // ṭîṭ
   * ```
   */
  TET;
  /**
   * HEBREW LETTER YOD (U+05D9) י
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   YOD: "y",
   * });
   * transliterate("יָ֗ד", schema);
   * // yād
   * ```
   */
  YOD;
  /**
   * HEBREW LETTER FINAL KAF (U+05DA) ך
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   FINAL KAF: "k",
   * });
   * transliterate("לֶךְ", schema);
   * // lek
   * ```
   */
  FINAL_KAF;
  /**
   * HEBREW LETTER KAF (U+05DB) כ
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   KAF: "k",
   * });
   * transliterate("כָּ֚כָה", schema);
   * // kākâ
   * ```
   */
  KAF;
  /**
   * HEBREW LETTER KAF (U+05DB) and DAGESH (U+05BC) כּ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * With only `KAF` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   KAF: "k",
   * });
   * transliterate("כָּ֚כָה", schema);
   * // kākâ
   * ```
   *
   * @example
   * With `KAF` set and `KAF_DAGESH` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   KAF: "kh",
   *   KAF_DAGESH: "k",
   * });
   * transliterate("כָּ֚כָה", schema);
   * // kākhâ
   * ```
   *
   * @remarks
   * The letter kaf with a dagesh kal.
   * Use when need to distinguish between spirantized forms
   */
  KAF_DAGESH;
  /**
   * HEBREW LETTER LAMED (U+05DC) ל
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   LAMED: "l",
   * });
   * transliterate("עַל", schema);
   * // ʿal
   * ```
   */
  LAMED;
  /**
   * HEBREW LETTER FINAL MEM (U+05DD) ם
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   FINAL MEM: "m",
   * });
   * transliterate("מַ֖יִם", schema);
   * // mayim
   * ```
   */
  FINAL_MEM;
  /**
   * HEBREW LETTER MEM (U+05DE) מ
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   MEM: "m",
   * });
   * transliterate("מַ֖יִם", schema);
   * // mayim
   * ```
   */
  MEM;
  /**
   * HEBREW LETTER FINAL NUN (U+05DF) ן
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   FINAL NUN: "n",
   * });
   * transliterate("נ֔וּן", schema);
   * // nûn
   * ```
   */
  FINAL_NUN;
  /**
   * HEBREW LETTER NUN (U+05E0) נ
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   NUN: "n",
   * });
   * transliterate("נ֔וּן", schema);
   * // nûn
   * ```
   */
  NUN;
  /**
   * HEBREW LETTER SAMEKH (U+05E1) ס
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SAMEKH: "s",
   * });
   * transliterate("ס֥וּס", schema);
   * // sûs
   * ```
   */
  SAMEKH;
  /**
   * HEBREW LETTER AYIN (U+05E2) ע
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   AYIN: "ʿ",
   * });
   * transliterate("עָ֑יִן", schema);
   * // ʿāyin
   * ```
   */
  AYIN;
  /**
   * HEBREW LETTER FINAL PE (U+05E3) ף
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   FINAL PE: "p",
   * });
   * transliterate("כַּ֣ף", schema);
   * // kap
   * ```
   */
  FINAL_PE;
  /**
   * HEBREW LETTER PE (U+05E4) פ
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   PE: "p",
   * });
   * transliterate("פֶּ֣רֶא חָפְשִׁ֑י", schema);
   * // pereʾ ḥopšî
   * ```
   */
  PE;
  /**
   * HEBREW LETTER  PE (U+05E4) and DAGESH (U+05BC) פּ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * With only `PE` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   PE_DAGESH: "p",
   * });
   * transliterate("פֶּ֣רֶא חָפְשִׁ֑י", schema);
   * // pereʾ ḥopšî
   * ```
   *
   * @example
   * With `PE` and `PE_DAGESH` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   PE: "f",
   *   PE_DAGESH: "p",
   * });
   * transliterate("פֶּ֣רֶא חָפְשִׁ֑י", schema);
   * // pereʾ ḥofšî
   * ```
   *
   * @remarks
   * The letter pe with a dagesh kal
   * Use when need to distinguish between spirantized forms
   */
  PE_DAGESH;
  /**
   * HEBREW LETTER FINAL TSADI (U+05E5) ץ
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   FINAL TSADI: "ṣ",
   * });
   * transliterate("צָ֚ץ", schema);
   * // ṣāṣ
   * ```
   */
  FINAL_TSADI;
  /**
   * HEBREW LETTER TSADI (U+05E6) צ
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TSADI: "ṣ",
   * });
   * transliterate("צָ֚ץ", schema);
   * // ṣāṣ
   * ```
   */
  TSADI;
  /**
   * HEBREW LETTER QOF (U+05E7) ק
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   QOF: "q",
   * });
   * transliterate("רַ֥ק", schema);
   * // raq
   * ```
   */
  QOF;
  /**
   * HEBREW LETTER RESH (U+05E8) ר
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   RESH: "r",
   * });
   * transliterate("רַ֥ק", schema);
   * // raq
   * ```
   */
  RESH;
  /**
   * HEBREW LETTER SHIN (U+05E9) and SHIN DOT (U+05C1) שׁ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SHIN: "š",
   * });
   * transliterate("שֵׁ֖ן", schema);
   * // šēn
   * ```
   */
  SHIN;
  /**
   * HEBREW LETTER SHIN (U+05E9) and SIN DOT (U+05C2) שׁ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SIN: "ś",
   * });
   * transliterate("כַּשְׂדִּ֔ים", schema);
   * // kaśdîm
   * ```
   */
  SIN;
  /**
   * HEBREW LETTER TAV (U+05EA) ת
   *
   * @category Consonants
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TAV: "t",
   * });
   * transliterate("תֵּ֛ת", schema);
   * // tēt
   * ```
   */
  TAV;
  /**
   * HEBREW LETTER TAV (U+05EA) and DAGESH (U+05BC) תּ
   *
   * @category Consonants
   * @category Orthographic Features
   *
   * @example
   * With only `TAV` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TAV: "t",
   * });
   * transliterate("תֵּ֛ת", schema);
   * // tēt
   * ```
   *
   * @example
   * With `TAV` and `TAV_DAGESH` set
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TAV: "th",
   *   TAV_DAGESH: "t",
   * });
   * transliterate("תֵּ֛ת", schema);
   * // tēth
   * ```
   *
   * @remarks
   * The letter tav with a dagesh kal.
   * Use when need to distinguish between spirantized forms
   */
  TAV_DAGESH;
  /**
   * Rules for customized output
   *
   * This property is an array of objects with the following properties each:
   * - `FEATURE`: the type of feature that the rule is checking — "word", "syllable", or "cluster"
   * - `HEBREW`: the Hebrew text that the rule matches, given as a string or Regex
   * - `PASS_THROUGH?`: An optional property; `true` if the rule should pass the characters of the result of the `TRANSLITERATION` callback to the be mapped to the schema
   * - `TRANSLITERATION`: the output of the rule, either a string or a callback whose properties differ based on the `FEATURE`
   *
   * The examples give the best indication of how to use these features, though see the particular types for more details
   *
   * @category Orthographic Features
   *
   * @example
   * `FEATURE` is `"word"` and `TRANSLITERATION` is a string
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ADDITIONAL_FEATURES: [{
   *     FEATURE: "word",
   *     HEBREW: "הָאָרֶץ",
   *     TRANSLITERATION: "The Earth"
   *   }]
   })
   * transliterate("וְאֵ֥ת הָאָֽרֶץ", schema);
   * // wəʾēt The Earth
   * ```
   *
   * @example
   * `FEATURE` is `"word"` and `TRANSLITERATION` is a callback
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ADDITIONAL_FEATURES: [{
   *     HEBREW: "שְׁתַּיִם",
   *     FEATURE: "word",
   *     TRANSLITERATION: function (_word, _hebrew, schema) {
   *       return (
   *         schema["SHIN"] +
   *         (schema["TAV_DAGESH"] ?? schema["TAV"]) +
   *         schema["PATAH"] +
   *         schema["YOD"] +
   *         schema["HIRIQ"] +
   *         schema["FINAL_MEM"]
   *       );
   *     }
   *   }]
   * });
   * transliterate("שְׁתַּיִם", schema);
   * // štayim
   * ```
   * @example
   * `FEATURE` is `"syllable"` and `TRANSLITERATION` is a string
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ADDITIONAL_FEATURES: [{
   *     FEATURE: "syllable",
   *     HEBREW: /יּ(?![\u{05B4}-\u{05BB}])/u, // a yod with a dagesh, not followed by a vowel character
   *     TRANSLITERATION: "Y"
   *   }]
   * });
   * transliterate("מְחִיּיָאֵ֗ל", schema);
   * // məḥiYyāʾēl
   * ```
   *
   * @example
   * `FEATURE` is `"syllable"` and `TRANSLITERATION` is a callback
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ADDITIONAL_FEATURES: [{
   *     FEATURE: "syllable",
   *     HEBREW: /\u{05C7}/u,
   *     TRANSLITERATION: (syllable) => {
   *       // If the syllable contains a qamets qatan character (U+05C7), check the text of the next syllable
   *       const next = syllable?.next?.value?.text;
   *
   *       // If the next syllable includes a hateph qamets, then replace the qamets qatan with a regular qamets
   *       if (next && next.includes("\u05B3")) {
   *         return syllable.text.replace("\u{05C7}", "\u{05B8}");
   *       }
   *       return syllable.text;
   *     }
   *   }]
   * });
   * transliterate("נָעֳמִי֙", schema);
   * // nāʿŏmî
   * ```
   *
   * @example
   * `FEATURE` is `"cluster"` and `TRANSLITERATION` is a string
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   ADDITIONAL_FEATURES: [{
   *     FEATURE: "cluster",
   *     HEBREW: "זּ",
   *     TRANSLITERATION: "tz"
   *   }]
   * });;
   * transliterate("הַזֹּאת", schema);
   * // hatzōʾt
   * ```
   *
   * @example
   * `FEATURE` is "cluster" and `TRANSLITERATION` is a callback
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   TAV_DAGESH: "tʰ",,
   *   ADDITIONAL_FEATURES: [{
   *     FEATURE: 'cluster',
   *     HEBREW: /תּ(?!\u{05B0})/u,
   *     TRANSLITERATION: (cluster, _, schema) => {
   *       // Because the *_DAGESH value is a digraph, we need to replace the first character
   *       // or it will be doubled in rules.ts as "tʰtʰ"
   *
   *
   *       // If there is a dagesh, but it is the beginning of the word
   *       // we can return the text, as the character w/ the dagesh will not be doubled
   *       if (!cluster.prev || cluster.prev.value?.isNotHebrew) {
   *         return cluster.text;
   *       }
   *
   *       // If there is a dagesh, it may be that it is a dagesh qal (i.e. lene)
   *       // If it is a dagesh lene, then like the beginning of the word,
   *       // the character w/ the dagesh will not be doubled
   *       const prevCoda = cluster.syllable?.prev?.value?.codaWithGemination;
   *       if (!prevCoda?.includes("ת",)) {
   *         return cluster.text;
   *       }
   *
   *       // convert "tʰtʰ" to "ttʰ"
   *       const noAspiration = schema['TAV_DAGESH']?.replace("ʰ",, '') ?? '';
   *       return cluster.text.replace("תּ",,`${noAspiration + schema['TAV_DAGESH']}`);
   *     },
   *   }]
   * });
   * transliterate("וַתֵּ֨שֶׁב", schema);
   * // wattʰēšeb
   * ```
   *
   */
  ADDITIONAL_FEATURES;
  /**
   * The full form of the divine name - יהוה
   *
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DIVINE_NAME: "yhwh",
   * });
   * transliterate("יְהֹוָ֗ה", schema);
   * // yhwh
   * ```
   */
  DIVINE_NAME;
  /**
   * The full form of the divine name pointed as 'elohim
   *
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   DIVINE_NAME_ELOHIM: "ʾĕlōhîm",
   * });
   * transliterate("יֱהֹוִה", schema);
   * // ʾĕlōhîm
   * ```
   *
   * @remarks
   * Matches on the forms:
   * - יֱהֹוִה
   * - יֱהוִה
   * - יְהֹוִה
   * - יְהוִה
   * If `undefined`, defaults to value of {@link DIVINE_NAME}
   */
  DIVINE_NAME_ELOHIM;
  /**
   * A syllable separator, usually an empty string
   *
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   SYLLABLE_SEPARATOR: "-",
   * });
   * transliterate('הָאָֽרֶץ', schema);
   * // hā-ʾā-reṣ
   * ```
   */
  SYLLABLE_SEPARATOR;
  /**
   * A mark for indentifying the stressed syllable
   *
   * @category Orthographic Features
   *
   * @example
   * ```js
   * const schema = new Schema({
   *   // truncated for brevity
   *   STRESS_MARKER: {
   *     location: "after-vowel",
   *     mark: "\u0301",
   *    },
   * });
   * transliterate("מֶ֣לֶךְ", schema);
   * // mélek
   * ```
   *
   * @remarks
   * Taamim are needed in the Hebrew text to correctly identify stress.
   */
  STRESS_MARKER;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  allowNoNiqqud;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  article;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  holemHaser;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   *
   */
  ketivQeres;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  longVowels;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  qametsQatan;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  shevaAfterMeteg;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  shevaWithMeteg;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  sqnmlvy;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  strict;
  /**
   * @category Syllabification
   *
   * @remarks
   * See implementation for more details
   */
  wawShureq;
  /**@category Constructors */
  constructor(schema) {
    this.VOCAL_SHEVA = schema.VOCAL_SHEVA;
    this.HATAF_SEGOL = schema.HATAF_SEGOL;
    this.HATAF_PATAH = schema.HATAF_PATAH;
    this.HATAF_QAMATS = schema.HATAF_QAMATS;
    this.HIRIQ = schema.HIRIQ;
    this.TSERE = schema.TSERE;
    this.SEGOL = schema.SEGOL;
    this.PATAH = schema.PATAH;
    this.QAMATS = schema.QAMATS;
    this.HOLAM = schema.HOLAM;
    this.HOLAM_HASER = schema.HOLAM_HASER;
    this.QUBUTS = schema.QUBUTS;
    this.DAGESH = schema.DAGESH;
    this.DAGESH_CHAZAQ = schema.DAGESH_CHAZAQ;
    this.MAQAF = schema.MAQAF;
    this.PASEQ = schema.PASEQ;
    this.SOF_PASUQ = schema.SOF_PASUQ;
    this.QAMATS_QATAN = schema.QAMATS_QATAN;
    this.FURTIVE_PATAH = schema.FURTIVE_PATAH;
    this.HIRIQ_YOD = schema.HIRIQ_YOD;
    this.TSERE_YOD = schema.TSERE_YOD;
    this.SEGOL_YOD = schema.SEGOL_YOD;
    this.SHUREQ = schema.SHUREQ;
    this.HOLAM_VAV = schema.HOLAM_VAV;
    this.QAMATS_HE = schema.QAMATS_HE;
    this.PATAH_HE = schema.PATAH_HE;
    this.SEGOL_HE = schema.SEGOL_HE;
    this.TSERE_HE = schema.TSERE_HE;
    this.MS_SUFX = schema.MS_SUFX;
    this.ALEF = schema.ALEF;
    this.BET_DAGESH = schema.BET_DAGESH;
    this.BET = schema.BET;
    this.GIMEL = schema.GIMEL;
    this.GIMEL_DAGESH = schema.GIMEL_DAGESH;
    this.DALET = schema.DALET;
    this.DALET_DAGESH = schema.DALET_DAGESH;
    this.HE = schema.HE;
    this.VAV = schema.VAV;
    this.ZAYIN = schema.ZAYIN;
    this.HET = schema.HET;
    this.TET = schema.TET;
    this.YOD = schema.YOD;
    this.FINAL_KAF = schema.FINAL_KAF;
    this.KAF = schema.KAF;
    this.KAF_DAGESH = schema.KAF_DAGESH;
    this.LAMED = schema.LAMED;
    this.FINAL_MEM = schema.FINAL_MEM;
    this.MEM = schema.MEM;
    this.FINAL_NUN = schema.FINAL_NUN;
    this.NUN = schema.NUN;
    this.SAMEKH = schema.SAMEKH;
    this.AYIN = schema.AYIN;
    this.FINAL_PE = schema.FINAL_PE;
    this.PE = schema.PE;
    this.PE_DAGESH = schema.PE_DAGESH;
    this.FINAL_TSADI = schema.FINAL_TSADI;
    this.TSADI = schema.TSADI;
    this.QOF = schema.QOF;
    this.RESH = schema.RESH;
    this.SHIN = schema.SHIN;
    this.SIN = schema.SIN;
    this.TAV = schema.TAV;
    this.TAV_DAGESH = schema.TAV_DAGESH;
    this.DIVINE_NAME = schema.DIVINE_NAME;
    this.DIVINE_NAME_ELOHIM = schema.DIVINE_NAME_ELOHIM;
    this.SYLLABLE_SEPARATOR = schema.SYLLABLE_SEPARATOR;
    this.ADDITIONAL_FEATURES = schema.ADDITIONAL_FEATURES;
    this.STRESS_MARKER = schema.STRESS_MARKER;
    this.longVowels = schema.longVowels;
    this.qametsQatan = schema.qametsQatan;
    this.sqnmlvy = schema.sqnmlvy;
    this.shevaAfterMeteg = schema.shevaAfterMeteg;
    this.shevaWithMeteg = schema.shevaWithMeteg;
    this.wawShureq = schema.wawShureq;
    this.article = schema.article;
    this.allowNoNiqqud = schema.allowNoNiqqud;
    this.strict = schema.strict;
    this.holemHaser = schema.holemHaser;
    this.ketivQeres = schema.ketivQeres;
  }
};
var SBL = class extends Schema {
  constructor(schema) {
    super({
      VOCAL_SHEVA: schema.VOCAL_SHEVA ?? "\u0259",
      HATAF_SEGOL: schema.HATAF_SEGOL ?? "\u0115",
      HATAF_PATAH: schema.HATAF_PATAH ?? "\u0103",
      HATAF_QAMATS: schema.HATAF_QAMATS ?? "\u014F",
      HIRIQ: schema.HIRIQ ?? "i",
      TSERE: schema.TSERE ?? "\u0113",
      SEGOL: schema.SEGOL ?? "e",
      PATAH: schema.PATAH ?? "a",
      QAMATS: schema.QAMATS ?? "\u0101",
      HOLAM: schema.HOLAM ?? "\u014D",
      HOLAM_HASER: schema.HOLAM_HASER ?? "\u014D",
      QUBUTS: schema.QUBUTS ?? "u",
      DAGESH: schema.DAGESH ?? "",
      DAGESH_CHAZAQ: schema.DAGESH_CHAZAQ ?? true,
      MAQAF: schema.MAQAF ?? "-",
      PASEQ: schema.PASEQ ?? "",
      SOF_PASUQ: schema.SOF_PASUQ ?? "",
      QAMATS_QATAN: schema.QAMATS_QATAN ?? "o",
      FURTIVE_PATAH: schema.FURTIVE_PATAH ?? "a",
      HIRIQ_YOD: schema.HIRIQ_YOD ?? "\xEE",
      TSERE_YOD: schema.TSERE_YOD ?? "\xEA",
      SEGOL_YOD: schema.SEGOL_YOD ?? "\xEA",
      SHUREQ: schema.SHUREQ ?? "\xFB",
      HOLAM_VAV: schema.HOLAM_VAV ?? "\xF4",
      QAMATS_HE: schema.QAMATS_HE ?? "\xE2",
      PATAH_HE: schema.PATAH_HE ?? void 0,
      SEGOL_HE: schema.SEGOL_HE ?? void 0,
      TSERE_HE: schema.TSERE_HE ?? void 0,
      MS_SUFX: schema.MS_SUFX ?? "\u0101yw",
      ALEF: schema.ALEF ?? "\u02BE",
      BET: schema.BET ?? "b",
      BET_DAGESH: schema.BET_DAGESH ?? void 0,
      GIMEL: schema.GIMEL ?? "g",
      GIMEL_DAGESH: schema.GIMEL_DAGESH ?? void 0,
      DALET: schema.DALET ?? "d",
      DALET_DAGESH: schema.DALET_DAGESH ?? void 0,
      HE: schema.HE ?? "h",
      VAV: schema.VAV ?? "w",
      ZAYIN: schema.ZAYIN ?? "z",
      HET: schema.HET ?? "\u1E25",
      TET: schema.TET ?? "\u1E6D",
      YOD: schema.YOD ?? "y",
      FINAL_KAF: schema.FINAL_KAF ?? "k",
      KAF: schema.KAF ?? "k",
      KAF_DAGESH: schema.KAF_DAGESH ?? void 0,
      LAMED: schema.LAMED ?? "l",
      FINAL_MEM: schema.FINAL_MEM ?? "m",
      MEM: schema.MEM ?? "m",
      FINAL_NUN: schema.FINAL_NUN ?? "n",
      NUN: schema.NUN ?? "n",
      SAMEKH: schema.SAMEKH ?? "s",
      AYIN: schema.AYIN ?? "\u02BF",
      FINAL_PE: schema.FINAL_PE ?? "p",
      PE: schema.PE ?? "p",
      PE_DAGESH: schema.PE_DAGESH ?? void 0,
      FINAL_TSADI: schema.FINAL_TSADI ?? "\u1E63",
      TSADI: schema.TSADI ?? "\u1E63",
      QOF: schema.QOF ?? "q",
      RESH: schema.RESH ?? "r",
      SHIN: schema.SHIN ?? "\u0161",
      SIN: schema.SIN ?? "\u015B",
      TAV: schema.TAV ?? "t",
      TAV_DAGESH: schema.TAV_DAGESH ?? void 0,
      DIVINE_NAME: schema.DIVINE_NAME ?? "yhwh",
      DIVINE_NAME_ELOHIM: schema.DIVINE_NAME_ELOHIM ?? void 0,
      SYLLABLE_SEPARATOR: schema.SYLLABLE_SEPARATOR ?? void 0,
      ADDITIONAL_FEATURES: schema.ADDITIONAL_FEATURES ?? void 0,
      STRESS_MARKER: schema.STRESS_MARKER ?? void 0,
      longVowels: schema.longVowels ?? true,
      qametsQatan: schema.qametsQatan ?? true,
      shevaAfterMeteg: schema.shevaAfterMeteg ?? true,
      shevaWithMeteg: schema.shevaWithMeteg ?? false,
      sqnmlvy: schema.sqnmlvy ?? true,
      wawShureq: schema.wawShureq ?? true,
      article: schema.article ?? true,
      allowNoNiqqud: schema.allowNoNiqqud ?? true,
      strict: schema.strict ?? false,
      holemHaser: schema.holemHaser || "remove",
      ketivQeres: schema.ketivQeres || void 0
    });
    this.VOCAL_SHEVA = schema.VOCAL_SHEVA ?? "\u0259";
    this.HATAF_SEGOL = schema.HATAF_SEGOL ?? "\u0115";
    this.HATAF_PATAH = schema.HATAF_PATAH ?? "\u0103";
    this.HATAF_QAMATS = schema.HATAF_QAMATS ?? "\u014F";
    this.HIRIQ = schema.HIRIQ ?? "i";
    this.TSERE = schema.TSERE ?? "\u0113";
    this.SEGOL = schema.SEGOL ?? "e";
    this.PATAH = schema.PATAH ?? "a";
    this.QAMATS = schema.QAMATS ?? "\u0101";
    this.HOLAM = schema.HOLAM ?? "\u014D";
    this.HOLAM_HASER = schema.HOLAM_HASER ?? "\u014D";
    this.QUBUTS = schema.QUBUTS ?? "u";
    this.DAGESH = schema.DAGESH ?? "";
    this.DAGESH_CHAZAQ = schema.DAGESH_CHAZAQ ?? true;
    this.MAQAF = schema.MAQAF ?? "-";
    this.PASEQ = schema.PASEQ ?? "";
    this.SOF_PASUQ = schema.SOF_PASUQ ?? "";
    this.QAMATS_QATAN = schema.QAMATS_QATAN ?? "o";
    this.FURTIVE_PATAH = schema.FURTIVE_PATAH ?? "a";
    this.HIRIQ_YOD = schema.HIRIQ_YOD ?? "\xEE";
    this.TSERE_YOD = schema.TSERE_YOD ?? "\xEA";
    this.SEGOL_YOD = schema.SEGOL_YOD ?? "\xEA";
    this.SHUREQ = schema.SHUREQ ?? "\xFB";
    this.HOLAM_VAV = schema.HOLAM_VAV ?? "\xF4";
    this.QAMATS_HE = schema.QAMATS_HE ?? "\xE2";
    this.PATAH_HE = schema.PATAH_HE ?? void 0;
    this.SEGOL_HE = schema.SEGOL_HE ?? void 0;
    this.TSERE_HE = schema.TSERE_HE ?? void 0;
    this.MS_SUFX = schema.MS_SUFX ?? "\u0101yw";
    this.ALEF = schema.ALEF ?? "\u02BE";
    this.BET = schema.BET ?? "b";
    this.BET_DAGESH = schema.BET_DAGESH ?? void 0;
    this.GIMEL = schema.GIMEL ?? "g";
    this.GIMEL_DAGESH = schema.GIMEL_DAGESH ?? void 0;
    this.DALET = schema.DALET ?? "d";
    this.DALET_DAGESH = schema.DALET_DAGESH ?? void 0;
    this.HE = schema.HE ?? "h";
    this.VAV = schema.VAV ?? "w";
    this.ZAYIN = schema.ZAYIN ?? "z";
    this.HET = schema.HET ?? "\u1E25";
    this.TET = schema.TET ?? "\u1E6D";
    this.YOD = schema.YOD ?? "y";
    this.FINAL_KAF = schema.FINAL_KAF ?? "k";
    this.KAF = schema.KAF ?? "k";
    this.KAF_DAGESH = schema.KAF_DAGESH ?? void 0;
    this.LAMED = schema.LAMED ?? "l";
    this.FINAL_MEM = schema.FINAL_MEM ?? "m";
    this.MEM = schema.MEM ?? "m";
    this.FINAL_NUN = schema.FINAL_NUN ?? "n";
    this.NUN = schema.NUN ?? "n";
    this.SAMEKH = schema.SAMEKH ?? "s";
    this.AYIN = schema.AYIN ?? "\u02BF";
    this.FINAL_PE = schema.FINAL_PE ?? "p";
    this.PE = schema.PE ?? "p";
    this.PE_DAGESH = schema.PE_DAGESH ?? void 0;
    this.FINAL_TSADI = schema.FINAL_TSADI ?? "\u1E63";
    this.TSADI = schema.TSADI ?? "\u1E63";
    this.QOF = schema.QOF ?? "q";
    this.RESH = schema.RESH ?? "r";
    this.SHIN = schema.SHIN ?? "\u0161";
    this.SIN = schema.SIN ?? "\u015B";
    this.TAV = schema.TAV ?? "t";
    this.TAV_DAGESH = schema.TAV_DAGESH ?? void 0;
    this.DIVINE_NAME = schema.DIVINE_NAME ?? "yhwh";
    this.DIVINE_NAME_ELOHIM = schema.DIVINE_NAME_ELOHIM ?? void 0;
    this.SYLLABLE_SEPARATOR = schema.SYLLABLE_SEPARATOR ?? void 0;
    this.ADDITIONAL_FEATURES = schema.ADDITIONAL_FEATURES ?? [
      {
        FEATURE: "syllable",
        HEBREW: /[\u{05B4}\u{05BB}]/u,
        TRANSLITERATION: (syllable, heb, schema2) => {
          const hasMater = syllable.clusters.some((cluster) => cluster.isMater);
          if (syllable.isAccented && !hasMater) {
            const macron = "\u0304";
            const output = syllable.hasVowelName("HIRIQ") ? schema2["HIRIQ"] + macron : schema2["QUBUTS"] + macron;
            return syllable.text.replace(heb, output.normalize("NFC"));
          }
          return syllable.text;
        }
      }
    ];
    this.STRESS_MARKER = schema.STRESS_MARKER ?? void 0;
    this.longVowels = schema.longVowels ?? true;
    this.qametsQatan = schema.qametsQatan ?? true;
    this.shevaAfterMeteg = schema.shevaAfterMeteg ?? true;
    this.shevaWithMeteg = schema.shevaWithMeteg ?? false;
    this.sqnmlvy = schema.sqnmlvy ?? true;
    this.wawShureq = schema.wawShureq ?? true;
    this.article = schema.article ?? true;
    this.allowNoNiqqud = schema.allowNoNiqqud ?? true;
    this.strict = schema.strict ?? false;
    this.holemHaser = schema.holemHaser ?? "remove";
    this.ketivQeres = schema.ketivQeres ?? void 0;
  }
};

// node_modules/hebrew-transliteration/dist/esm/hebCharsTrans.js
var transliterateMap = {
  //   niqqud
  "\u05B0": "VOCAL_SHEVA",
  // HEBREW POINT SHEVA (U+05B0)
  "\u05B1": "HATAF_SEGOL",
  // HEBREW POINT HATAF SEGOL (U+05B1)
  "\u05B2": "HATAF_PATAH",
  // HEBREW POINT HATAF PATAH (U+05B2)
  "\u05B3": "HATAF_QAMATS",
  // HEBREW POINT HATAF QAMATS (U+05B3)
  "\u05B4": "HIRIQ",
  // HEBREW POINT HIRIQ (U+05B4)
  "\u05B5": "TSERE",
  // HEBREW POINT TSERE (U+05B5)
  "\u05B6": "SEGOL",
  // HEBREW POINT SEGOL (U+05B6)
  "\u05B7": "PATAH",
  // HEBREW POINT PATAH (U+05B7)
  "\u05B8": "QAMATS",
  // HEBREW POINT QAMATS (U+05B8)
  "\u05B9": "HOLAM",
  // HEBREW POINT HOLAM (U+05B9)
  "\u05BA": "HOLAM",
  // HEBREW POINT HOLAM HASER FOR VAV (U+05BA)
  "\u05BB": "QUBUTS",
  // HEBREW POINT QUBUTS (U+05BB)
  "\u05BC": "DAGESH",
  // HEBREW POINT DAGESH OR MAPIQ (U+05BC)
  //  "\u{05BD}": "", // HEBREW POINT METEG (U+05BD)
  "\u05BE": "MAQAF",
  // HEBREW PUNCTUATION MAQAF (U+05BE)
  "\u05C0": "PASEQ",
  // HEBREW PUNCTUATION PASEQ (U+05C0)
  "\u05C3": "SOF_PASUQ",
  // HEBREW PUNCTUATION SOF PASUQ (U+05C3)
  "\u05C7": "QAMATS_QATAN",
  // HEBREW POINT QAMATS QATAN (U+05C7)
  //   consonants
  \u05D0: "ALEF",
  // HEBREW LETTER ALEF (U+05D0)
  \u05D1: "BET",
  // HEBREW LETTER BET (U+05D1)
  \u05D2: "GIMEL",
  // HEBREW LETTER GIMEL (U+05D2)
  \u05D3: "DALET",
  // HEBREW LETTER DALET (U+05D3)
  \u05D4: "HE",
  // HEBREW LETTER HE (U+05D4)
  \u05D5: "VAV",
  // HEBREW LETTER VAV (U+05D5)
  \u05D6: "ZAYIN",
  // HEBREW LETTER ZAYIN (U+05D6)
  \u05D7: "HET",
  // HEBREW LETTER HET (U+05D7)
  \u05D8: "TET",
  // HEBREW LETTER TET (U+05D8)
  \u05D9: "YOD",
  // HEBREW LETTER YOD (U+05D9)
  \u05DA: "FINAL_KAF",
  // HEBREW LETTER FINAL KAF (U+05DA)
  \u05DB: "KAF",
  // HEBREW LETTER KAF (U+05DB)
  \u05DC: "LAMED",
  // HEBREW LETTER LAMED (U+05DC)
  \u05DD: "FINAL_MEM",
  // HEBREW LETTER FINAL MEM (U+05DD)
  \u05DE: "MEM",
  // HEBREW LETTER MEM (U+05DE)
  \u05DF: "FINAL_NUN",
  // HEBREW LETTER FINAL NUN (U+05DF)
  \u05E0: "NUN",
  // HEBREW LETTER NUN (U+05E0)
  \u05E1: "SAMEKH",
  // HEBREW LETTER SAMEKH (U+05E1)
  \u05E2: "AYIN",
  // HEBREW LETTER AYIN (U+05E2)
  \u05E3: "FINAL_PE",
  // HEBREW LETTER FINAL PE (U+05E3)
  \u05E4: "PE",
  // HEBREW LETTER PE (U+05E4)
  \u05E5: "FINAL_TSADI",
  // HEBREW LETTER FINAL TSADI (U+05E5)
  \u05E6: "TSADI",
  // HEBREW LETTER TSADI (U+05E6)
  \u05E7: "QOF",
  // HEBREW LETTER QOF (U+05E7)
  \u05E8: "RESH",
  // HEBREW LETTER RESH (U+05E8)
  \u05E9: "SHIN",
  // HEBREW LETTER SHIN (U+05E9)
  \u05EA: "TAV"
  // HEBREW LETTER TAV (U+05EA)
  // "\u{05EF}": "", // HEBREW YOD TRIANGLE (U+05EF)
  // װ: "", // HEBREW LIGATURE YIDDISH DOUBLE VAV (U+05F0)
  // ױ: "", // HEBREW LIGATURE YIDDISH VAV YOD (U+05F1)
  // ײ: "" // HEBREW LIGATURE YIDDISH DOUBLE YOD (U+05F2)
};

// node_modules/hebrew-transliteration/dist/esm/rules.js
var taamim2 = /[\u{0591}-\u{05AF}\u{05BD}\u{05BF}]/gu;
var addStressMarker = (text, syl, schema) => {
  if (!schema.STRESS_MARKER || !text) {
    return text;
  }
  if (!syl.isAccented) {
    return text;
  }
  const exclude = schema.STRESS_MARKER?.exclude ?? "never";
  if (exclude === "single" && !syl.prev && !syl.next) {
    return text;
  }
  if (exclude === "final" && !syl.next) {
    return text;
  }
  const location = schema.STRESS_MARKER.location;
  const mark = schema.STRESS_MARKER.mark;
  if (text.includes(mark)) {
    return text;
  }
  if (location === "before-syllable") {
    const isDoubled = syl.clusters.map((c) => isDageshChazaq(c, schema)).includes(true);
    if (isDoubled) {
      const [first, ...rest] = text.split("");
      return `${first}${mark}${rest.join("")}`;
    }
    return `${mark}${text}`;
  }
  if (location === "after-syllable") {
    return `${text}${mark}`;
  }
  const vowels3 = [
    schema.PATAH,
    schema.HATAF_PATAH,
    schema.QAMATS,
    schema.HATAF_QAMATS,
    schema.SEGOL,
    schema.HATAF_SEGOL,
    schema.TSERE,
    schema.HIRIQ,
    schema.HOLAM,
    schema.QAMATS_QATAN,
    schema.QUBUTS,
    schema.QAMATS_HE,
    schema.SEGOL_HE,
    schema.TSERE_HE,
    schema.HIRIQ_YOD,
    schema.TSERE_YOD,
    schema.SEGOL_YOD,
    schema.HOLAM_VAV,
    schema.SHUREQ
  ].filter((v) => typeof v === "string").sort((a, b) => b.length - a.length);
  const vowelRgx = new RegExp(`${vowels3.join("|")}`);
  const match = text.match(vowelRgx);
  if (location === "before-vowel") {
    return match?.length ? text.replace(match[0], `${mark}${match[0]}`) : text;
  }
  return match?.length ? text.replace(match[0], `${match[0]}${mark}`) : text;
};
var copySyllable = (newText, old) => {
  const newClusters = newText.split(clusterSplitGroup).map((clusterString) => new Cluster(clusterString, true));
  const oldClusters = old.clusters;
  if (newClusters.length === oldClusters.length) {
    newClusters.forEach((c, i) => (c.prev = oldClusters[i]?.prev ?? null, c.next = oldClusters[i]?.next ?? null));
  } else {
    for (let i = 0; i < newClusters.length; i++) {
      const c = newClusters[i];
      if (oldClusters[i]?.text[0] === c?.text[0]) {
        c.prev = oldClusters[i]?.prev ?? null;
        c.next = oldClusters[i]?.next ?? null;
      } else {
        c.prev = oldClusters[i]?.prev ?? null;
        c.next = oldClusters[i + 1]?.next ?? null;
        i++;
      }
    }
  }
  const newSyl = new Syllable(newClusters, {
    isClosed: old.isClosed,
    isAccented: old.isAccented,
    isFinal: old.isFinal
  });
  newClusters.forEach((c) => c.syllable = newSyl);
  newSyl.prev = old.prev;
  newSyl.next = old.next;
  newSyl.word = old.word;
  return newSyl;
};
var getDageshChazaqVal = (input, schema, isChazaq) => {
  if (!isChazaq) {
    return input;
  }
  const dagesh2 = schema["DAGESH_CHAZAQ"];
  const syllableSeparator = schema["SYLLABLE_SEPARATOR"] ?? "";
  if (typeof dagesh2 === "boolean") {
    return input + syllableSeparator + input;
  }
  return input + dagesh2;
};
var getDivineName = (str, schema) => {
  const begn = str[0];
  const end = str[str.length - 1];
  const divineName = schema.DIVINE_NAME_ELOHIM && /\u{05B4}/u.test(str) ? schema.DIVINE_NAME_ELOHIM : schema.DIVINE_NAME;
  return `${hebChars.test(begn) ? "" : begn}${divineName}${hebChars.test(end) ? "" : end}`;
};
var isDageshChazaq = (cluster, schema) => {
  if (!schema.DAGESH_CHAZAQ) {
    return false;
  }
  if (cluster.isShureq) {
    return false;
  }
  if (!/\u{05BC}/u.test(cluster.text)) {
    return false;
  }
  const prevCluster = cluster.prev?.value;
  if (prevCluster && prevCluster.hasSheva) {
    return false;
  }
  const prevWord = cluster.syllable?.word?.prev?.value;
  if (prevWord && prevWord?.isInConstruct && !prevWord.syllables[prevWord.syllables.length - 1].isClosed) {
    return true;
  }
  const prevSyllable = cluster.syllable?.prev;
  if (!prevSyllable) {
    return false;
  }
  const prevCoda = prevSyllable.value?.codaWithGemination;
  if (!prevCoda) {
    return false;
  }
  return prevCoda === cluster.syllable?.onset;
};
var joinSyllableChars = (syl, sylChars, schema) => {
  const isInConstruct = syl.word?.isInConstruct;
  if (isInConstruct) {
    return sylChars.map(mapChars(schema)).join("");
  }
  if (!syl.isAccented) {
    return sylChars.map(mapChars(schema)).join("");
  }
  const isOnlyPunctuation = syl.clusters.map((c) => c.isPunctuation).every((c) => c);
  if (isOnlyPunctuation) {
    return sylChars.map(mapChars(schema)).join("");
  }
  return sylChars.map(mapChars(schema)).join("");
};
var mapChars = (schema) => (input) => {
  return [...input].map((char) => char in transliterateMap ? schema[transliterateMap[char]] : char).join("");
};
var materFeatures = (syl, schema) => {
  const mater = syl.clusters.filter((c) => c.isMater)[0];
  const prev = mater.prev instanceof Cluster ? mater.prev : null;
  const materText = mater.text;
  const prevText = (prev?.text || "").replace(taamim2, "");
  let noMaterText = syl.clusters.filter((c) => !c.isMater).map((c) => cluterRules(c, schema)).join("");
  const hasMaqaf = mater.text.includes("\u05BE");
  noMaterText = hasMaqaf ? noMaterText.concat("\u05BE") : noMaterText;
  if (/י/.test(materText)) {
    if (/\u{05B4}/u.test(prevText)) {
      return replaceWithRegex(noMaterText, /\u{05B4}/u, schema.HIRIQ_YOD);
    }
    if (/\u{05B5}/u.test(prevText)) {
      return replaceWithRegex(noMaterText, /\u{05B5}/u, schema.TSERE_YOD);
    }
    if (/\u{05B6}/u.test(prevText)) {
      return replaceWithRegex(noMaterText, /\u{05B6}/u, schema.SEGOL_YOD);
    }
  }
  if (/ו/u.test(materText)) {
    if (/\u{05B9}/u.test(prevText)) {
      return replaceWithRegex(noMaterText, /\u{05B9}/u, schema.HOLAM_VAV);
    }
  }
  if (/ה/.test(materText)) {
    if (/\u{05B8}/u.test(prevText)) {
      return replaceWithRegex(noMaterText, /\u{05B8}/u, schema.QAMATS_HE);
    }
  }
  return materText;
};
var removeTaamim2 = (input) => input.replace(taamim2, "");
var replaceAndTransliterate = (input, regex, replaceValue, schema) => {
  const sylSeq = replaceWithRegex(input, regex, replaceValue);
  return [...sylSeq].map(mapChars(schema)).join("");
};
var replaceWithRegex = (input, regex, replaceValue) => input.replace(regex, replaceValue);
var cluterRules = (cluster, schema) => {
  let clusterText = removeTaamim2(cluster.text);
  const clusterFeatures = schema.ADDITIONAL_FEATURES?.filter((seq) => seq.FEATURE === "cluster");
  if (clusterFeatures) {
    for (const feature of clusterFeatures) {
      const heb = new RegExp(feature.HEBREW, "u");
      if (feature.FEATURE === "cluster" && heb.test(clusterText)) {
        const transliteration = feature.TRANSLITERATION;
        const passThrough = feature.PASS_THROUGH ?? true;
        if (typeof transliteration === "string") {
          return replaceAndTransliterate(clusterText, heb, transliteration, schema);
        }
        if (!passThrough) {
          return transliteration(cluster, feature.HEBREW, schema);
        }
        clusterText = transliteration(cluster, feature.HEBREW, schema);
      }
    }
  }
  const syl = cluster.syllable;
  clusterText = cluster.hasSheva && syl?.isClosed ? clusterText.replace(/\u{05B0}/u, "") : clusterText;
  if (/ה\u{05BC}$/mu.test(clusterText)) {
    return replaceWithRegex(clusterText, /ה\u{05BC}/u, schema.HE);
  }
  if (syl?.isFinal && !syl?.isClosed) {
    const furtiveChet = /\u{05D7}\u{05B7}$/mu;
    if (furtiveChet.test(clusterText)) {
      return replaceWithRegex(clusterText, furtiveChet, "\u05B7\u05D7");
    }
    const furtiveAyin = /\u{05E2}\u{05B7}$/mu;
    if (furtiveAyin.test(clusterText)) {
      return replaceWithRegex(clusterText, furtiveAyin, "\u05B7\u05E2");
    }
    const furtiveHe = /\u{05D4}\u{05BC}\u{05B7}$/mu;
    if (furtiveHe.test(clusterText)) {
      return replaceWithRegex(clusterText, furtiveHe, "\u05B7\u05D4\u05BC");
    }
  }
  const isDageshChazq = isDageshChazaq(cluster, schema);
  if (schema.BET_DAGESH && /ב\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ב\u{05BC}/u, getDageshChazaqVal(schema.BET_DAGESH, schema, isDageshChazq));
  }
  if (schema.GIMEL_DAGESH && /ג\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ג\u{05BC}/u, getDageshChazaqVal(schema.GIMEL_DAGESH, schema, isDageshChazq));
  }
  if (schema.DALET_DAGESH && /ד\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ד\u{05BC}/u, getDageshChazaqVal(schema.DALET_DAGESH, schema, isDageshChazq));
  }
  if (schema.KAF_DAGESH && /כ\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /כ\u{05BC}/u, getDageshChazaqVal(schema.KAF_DAGESH, schema, isDageshChazq));
  }
  if (schema.KAF_DAGESH && /ך\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ך\u{05BC}/u, getDageshChazaqVal(schema.KAF_DAGESH, schema, isDageshChazq));
  }
  if (schema.PE_DAGESH && /פ\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /פ\u{05BC}/u, getDageshChazaqVal(schema.PE_DAGESH, schema, isDageshChazq));
  }
  if (schema.TAV_DAGESH && /ת\u{05BC}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ת\u{05BC}/u, getDageshChazaqVal(schema.TAV_DAGESH, schema, isDageshChazq));
  }
  if (/ש\u{05C1}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ש\u{05C1}/u, getDageshChazaqVal(schema.SHIN, schema, isDageshChazq));
  }
  if (/ש\u{05C2}/u.test(clusterText)) {
    return replaceWithRegex(clusterText, /ש\u{05C2}/u, getDageshChazaqVal(schema.SIN, schema, isDageshChazq));
  }
  if (isDageshChazq) {
    const consonant = cluster.chars[0].text;
    const consonantDagesh = new RegExp(consonant + "\u05BC", "u");
    return replaceWithRegex(clusterText, consonantDagesh, getDageshChazaqVal(consonant, schema, isDageshChazq));
  }
  if (cluster.isShureq) {
    return clusterText.replace("\u05D5\u05BC", schema.SHUREQ);
  }
  return clusterText;
};
var sylRules = (syl, schema) => {
  const baseSyllableText = syl.text.replace(taamim2, "");
  const syllableFeatures = schema.ADDITIONAL_FEATURES?.filter((seq) => seq.FEATURE === "syllable");
  if (syllableFeatures) {
    for (const feature of syllableFeatures) {
      const heb = new RegExp(feature.HEBREW, "u");
      if (feature.FEATURE === "syllable" && heb.test(baseSyllableText)) {
        const transliteration = feature.TRANSLITERATION;
        const passThrough = feature.PASS_THROUGH ?? true;
        if (typeof transliteration === "string") {
          return replaceAndTransliterate(baseSyllableText, heb, transliteration, schema);
        }
        if (!passThrough) {
          return transliteration(syl, feature.HEBREW, schema);
        }
        const newText = transliteration(syl, feature.HEBREW, schema);
        if (newText !== baseSyllableText) {
          syl = copySyllable(newText, syl);
        }
      }
    }
  }
  const hasMater = syl.clusters.map((c) => c.isMater).includes(true);
  if (hasMater) {
    const materSyl = materFeatures(syl, schema);
    const text2 = joinSyllableChars(syl, [...materSyl], schema);
    return addStressMarker(text2, syl, schema);
  }
  const clusters = syl.clusters.map((cluster) => cluterRules(cluster, schema));
  const joined = joinSyllableChars(syl, clusters, schema).replace(taamim2, "");
  const mSSuffix = /\u{05B8}\u{05D9}\u{05D5}/u;
  if (syl.isFinal && mSSuffix.test(baseSyllableText)) {
    const text2 = joined.replace(schema["QAMATS"] + schema["YOD"] + schema["VAV"], schema.MS_SUFX);
    return addStressMarker(text2, syl, schema);
  }
  if (schema.SEGOL_HE && /\u{05B6}\u{05D4}/u.test(baseSyllableText)) {
    const text2 = joined.replace(schema["SEGOL"] + schema["HE"], schema.SEGOL_HE);
    return addStressMarker(text2, syl, schema);
  }
  if (schema.TSERE_HE && /\u{05B5}\u{05D4}/u.test(baseSyllableText)) {
    const text2 = joined.replace(schema["TSERE"] + schema["HE"], schema.TSERE_HE);
    return addStressMarker(text2, syl, schema);
  }
  if (schema.PATAH_HE && /\u{05B7}\u{05D4}/u.test(baseSyllableText)) {
    const text2 = joined.replace(schema["PATAH"] + schema["HE"], schema.PATAH_HE);
    return addStressMarker(text2, syl, schema);
  }
  const text = joined.replace(taamim2, "");
  return addStressMarker(text, syl, schema);
};
var wordRules = (word, schema) => {
  if (word.isDivineName) {
    return getDivineName(word.text, schema);
  }
  if (word.hasDivineName) {
    return `${sylRules(word.syllables[0], schema)}-${getDivineName(word.text, schema)}`;
  }
  if (word.isNotHebrew) {
    return word.text;
  }
  const wordFeatures = schema.ADDITIONAL_FEATURES?.filter((seq) => seq.FEATURE === "word");
  if (wordFeatures) {
    const text = word.text.replace(taamim2, "");
    for (const feature of wordFeatures) {
      const heb = new RegExp(feature.HEBREW, "u");
      if (heb.test(text)) {
        const transliteration = feature.TRANSLITERATION;
        const passThrough = feature.PASS_THROUGH ?? true;
        if (typeof transliteration === "string") {
          return replaceAndTransliterate(text, heb, transliteration, schema);
        }
        if (!passThrough) {
          return transliteration(word, feature.HEBREW, schema);
        }
        return new Word(transliteration(word, feature.HEBREW, schema), schema);
      }
    }
    return word;
  }
  return word;
};

// node_modules/hebrew-transliteration/dist/esm/transliterate.js
var getSylOpts = (schema) => {
  const options = {};
  if ("longVowels" in schema)
    options.longVowels = schema.longVowels;
  if ("qametsQatan" in schema)
    options.qametsQatan = schema.qametsQatan;
  if ("sqnmlvy" in schema)
    options.shevaAfterMeteg = schema.shevaAfterMeteg;
  if ("sqnmlvy" in schema)
    options.sqnmlvy = schema.sqnmlvy;
  if ("wawShureq" in schema)
    options.wawShureq = schema.wawShureq;
  if ("article" in schema)
    options.article = schema.article;
  if ("allowNoNiqqud" in schema)
    options.allowNoNiqqud = schema.allowNoNiqqud;
  if ("strict" in schema)
    options.strict = schema.strict;
  return options;
};
var transliterate = (text, schema) => {
  const transSchema = schema instanceof Schema ? schema : new SBL(schema ?? {});
  const newText = text instanceof Text ? text : new Text(text, getSylOpts(transSchema ?? {}));
  return newText.words.map((word) => {
    const transliteration = wordRules(word, transSchema);
    if (!(transliteration instanceof Word)) {
      return `${transliteration}${word.whiteSpaceAfter ?? ""}`;
    }
    const syllableTransliteration = transliteration.syllables.map((s) => sylRules(s, transSchema)).reduce((a, c, i) => {
      if (!i) {
        return a + c;
      }
      if (!transSchema.SYLLABLE_SEPARATOR) {
        return a + c;
      }
      if (c.includes(transSchema.SYLLABLE_SEPARATOR)) {
        return a + c;
      }
      return a + transSchema.SYLLABLE_SEPARATOR + c;
    }, "");
    return `${syllableTransliteration}${word.whiteSpaceAfter ?? ""}`;
  }).join("");
};
export {
  SBL,
  Schema,
  Text,
  remove,
  sequence2 as sequence,
  transliterate
};

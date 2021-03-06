/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Initial Developer of the Original Code is
 * Tim Taubert <tim@timtaubert.de>
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

let {Windows} = require("util/windows");

let Actions = {
  _labels: {
    "focusURLBar": "Focus URL Bar",
    "focusURLBar2": "Focus URL Bar 2",
    "key_search2": "Web Search 2",
    "key_stop": "Stop",
    "goBackKb": "Back",
    "goBackKb2": "Back 2",
    "goForwardKb": "Forward",
    "goForwardKb2": "Forward 2",
    "key_close": "Close Tab",
    "key_undoCloseTab": "Undo Close Tab",
    "key_undoCloseWindow": "Undo Close Window",
    "key_toggleAddonBar": "Toggle Add-on Bar",
    "key_findPrevious": "Find Previous",
    "key_selectLastTab": "Select Last Tab",
    "key_selectTab1": "Select Tab 1",
    "key_selectTab2": "Select Tab 2",
    "key_selectTab3": "Select Tab 3",
    "key_selectTab4": "Select Tab 4",
    "key_selectTab5": "Select Tab 5",
    "key_selectTab6": "Select Tab 6",
    "key_selectTab7": "Select Tab 7",
    "key_selectTab8": "Select Tab 8",
    "key_tabview": "Tab Groups",
    "key_nextTabGroup": "Switch To Next Tab Group",
    "key_previousTabGroup": "Switch To Previous Tab Group"
  },

  get menuItems() {
    if (!this._menuItems)
      this._loadMenuItems();

    return this._menuItems;
  },

  findByKey: function (key) {
    let label = key.getLabel();

    if (label)
      return label;

    let id = key.id;

    if (id in this._labels)
      return this._labels[id];

    // try to find a menuitem
    let menuitem = Windows.querySelector("menuitem[key=" + id + "]");
    if (menuitem && menuitem.hasAttribute("label"))
      return menuitem.getAttribute("label");

    return id;
  }
}

exports.Actions = Actions;

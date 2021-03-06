/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/CookiesListItems.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, css, html} from 'lit-element';

import {AnypointMenuMixin} from '@anypoint-web-components/anypoint-menu-mixin/anypoint-menu-mixin.js';

export {CookiesListWrapper};

declare class CookiesListWrapper {
  render(): any;
}

export {CookiesListItems};

declare namespace UiElements {

  /**
   * # Cookies list view
   *
   * ## Data model
   * Each cookie item requires following properties:
   * -   `name` (String) Cookie name
   * -   `value` (String) Cookie value
   * -   `domain` (String) Cookie domain
   * -   `path` (String) Cookie path.
   *
   * ### Example
   *
   * ```html
   * <cookies-list-items items="[[cookies]]"></cookies-list-items>
   * ```
   *
   * ## List handling
   *
   * The element uses `<iron-list>` element that creates a virtual list containing
   * limited number of child elements. It allows to load huge number of requests
   * without influencing the performance.
   *
   * ### Styling
   * `<cookies-list-items>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--cookies-list-items` | Mixin applied to the element | `{}`
   * `--action-button` | Mixin apllied to the primary action buttons | `{}`
   * `--secondary-action-button-color` | Color of the secondary action button | * `--primary-color`
   * `--arc-font-body1` | Mixin applied to the element | `{}`
   * `--cookies-list-item` | Mixin applied to each list item | `{}`
   * `--cookies-list-item-selected` | Mixin applied to the selected list item | `{}`
   * `--cookies-list-item-selected-background-color` | Selection color for list items. | `#E0E0E0`
   * `--cookies-list-items-search-input` | Mixin applied to the search input | `{}`
   * `--cookies-list-items-header` | Mixin applied to the list header options section. | `{}`
   * `--cookies-list-items-list` | Mixin applied to the list (`iron-list`) | `{}`
   * `--cookies-list-item-value` | Mixin applied to cookie value label | `{}`
   * `--cookies-list-item-name` |  Mixin applied to cookie name label. | `{}`
   * `--cookies-list-item-url-color` | Domain and path labels color | `rgba(0, 0, 0, 0.54)`
   * `--context-menu-item-color` | Color of the dropdown menu items | ``
   * `--context-menu-item-background-color` | Background olor of the dropdown menu items | ``
   * `--context-menu-item-color-hover` | Color of the dropdown menu items when hovering | ``
   * `--context-menu-item-background-color-hover` | Background olor of the dropdown menu items when hovering | ``
   */
  class CookiesListItems extends LitElement {
    readonly _list: any;
    readonly hasItems: any;

    /**
     * If true, the user selected some elements on list. Check the
     * `this.selectedItems` property to check for the selected elements.
     *    
     */
    readonly hasSelection: any;

    /**
     * List of selected items on the list.
     */
    selectedItems: any[]|null|undefined;

    /**
     * Changes information density of list items.
     * By default it uses material's peper item with two lines (72px heigth)
     * Possible values are:
     *
     * - `default` or empty - regular list view
     * - `comfortable` - enables MD single line list item vie (52px heigth)
     * - `compact` - enables list that has 40px heigth (touch recommended)
     */
    listType: string|null|undefined;
    readonly hasTwoLines: any;

    /**
     * The list of cookie items to render.
     */
    items: any[]|null|undefined;

    /**
     * A list of selected indexes.
     */
    selectedIndexes: any[]|null|undefined;

    /**
     * Enables compatibility with Anypoint platform
     */
    compatibility: boolean|null|undefined;

    /**
     * Enables Material Design outlined style for inputs.
     */
    outlined: boolean|null|undefined;
    constructor();
    render(): any;
    _headerTemplate(): any;
    _selectionTemplate(): any;
    _unavailableTemplate(): any;
    _listTemplate(): any;
    clearSelection(): void;

    /**
     * Dispatches `list-item-details` non bubbling custom event with item data.
     */
    _cookieDetails(e: CustomEvent|null): void;

    /**
     * Toggles selection of of all itmes on the list.
     */
    _toggleSelectAll(e: Event|null): void;

    /**
     * Informs hosting application to delete currently selected items.
     */
    _deleteSelected(): void;

    /**
     * Requests to export items to Drive
     */
    _onExportSelected(): void;

    /**
     * Closes list menu and resets selection.
     */
    _deselectMenu(): void;

    /**
     * Dispatches the `list-items-search` with current filter value.
     * The event does not bubble.
     */
    _searchHandler(e: Event|null): void;
    _selectedHandler(e: any): void;

    /**
     * Updates icon size CSS variable and notifies resize on the list when
     * list type changes.
     */
    _updateListStyles(type: String|null): void;
  }
}

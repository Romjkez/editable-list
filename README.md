# editable-list
Component for displaying and editing lists of items.

It gets an **array of *EditableListItem*** and displays items, showing **Edit** and **Delete** buttons right after each one.
You can also add an item by clicking **Add** button
![List screenshot](https://i.imgur.com/U34GS46.png)
##Installation
1) ```npm install editable-list --save```  
2) Import ```EditableListModule``` to your AppModule(or other key module like CoreModule)
3) *(optional) Insert this Sass styles in your global styles file(usually it's ```src/styles.scss```)    
```sass
 @import '~@angular/material/theming';
 @include mat-core();
 
 $candy-app-primary: mat-palette($mat-deep-purple); // you can change color
 $candy-app-accent: mat-palette($mat-amber);
 $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent);
 
 @include mat-core-theme($candy-app-theme);
 @include mat-button-theme($candy-app-theme);
 @include mat-icon-theme($candy-app-theme);
 @include mat-dialog-theme($candy-app-theme);
 ```
 You can change primary and accent colors, but make sure to have last 4 @include's as they are necessary for correct displaying of material components
 
 *- *If you are already using prebuilt or custom material theme including last 4 imports, just ignore step 3*


## API
*EditableListItem's* structure is following:
```typescript
interface EditableListItem {
  id: number;
  category?: string;
  value: string
} 
```
### Inputs
Customize component as you wish. Translate component into another language, if it's necessary.

| Parameter | Options | Default | Description
| :---: | :---: | :---: | :---:
| items | EditableListItem[]| []|List of items which you can provide to component
| confirmItemRemoval | [true,false] | true | If *true*, every click on Delete button will show a dialog asking to confirm action,  if  *false*, items will be deleted immediately
| enableCategories | [true,false] | false | If *true*, every EditableListItem will require to have *category* field when editing or adding an item
| title | - | - | Title of a list
| labelAdd| - | Add item | Label of *Add item* button
| labelEdit | - | Edit |Label of *Edit item* button
| labelRemove | - | Remove |Label of *Remove item* button
| labelConfirm | - | Confirm | Label of *Confirm* button inside dialog
| labelCancel | - | Cancel |Label of *Cancel* button inside dialog
| removeModalQuestion | - | Remove item? | Question showing inside dialog

### Events
Events are useful for synchronizing list changes with your backend.

| Event | Output   |
| :---: | :---:  |
| added | EditableListItem |
| edited | EditableListItem |
| removed | EditableListItem |

#### Questions? Suggestions?
This is my first open-source sharing, so code quality or documentation could have some problems.

Feel free to pull request or email me: meshkov.ra@ya.ru

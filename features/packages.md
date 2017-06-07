---
title: Packages
date: 2017-05-31 15:00:00 Z
---

# Packages
A package refers to a grouping of assets, which refers to recipes and the related dependencies needed for recipes to work, e.g. connections, SDK connectors, lookup tables and account properties. With the packages feature, users can move these assets easily across different Workato accounts.

This is useful when teams are collaborating across different Workato accounts, for example, if the development team wishes to move recipes over to the QA team's Workato account, or to the production Workato account. Consultants can also utilize this feature to move comprehensive integrations into their clients' accounts.

The packages feature is enabled only for certain Workato plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

For Workato accounts with the packages feature enabled, users will be able to see the import/export option on their account menu.

![Packages option](/assets/images/features/packages/packages-option.png)
*Packages menu option*

Upon clicking the Import/export option on the menu, you'll be brought into the packages page.

![Import export page](/assets/images/features/packages/import-export-buttons.png)
*Packages page with import and export functions*

# Exporting packages
When you export a folder of recipes as a zip file, included within that zip file are:
- recipes in that folder
- subfolders and recipes in those subfolders
- associated connections
- associated SDK connectors
- associated callable recipes
- all account properties
- all lookup tables

To begin exporting your recipes, ensure that all the recipes you wish to export are grouped together in a Workato folder. All associated connections, SDK connectors and callable recipes will also be bundled into the package automatically. All account properties and lookup tables in that Workato account are also bundled into the package. Once the package is created, the user can download the package in a zip file.

In the example below, 2 recipes can be found in the **Customer Sync** folder. In these recipes, the user utilizes assets such as callable recipes and lookup tables.

To export a folder as a package, click on the **Export** button. Select the folder to export.

![Export packages - select folder to export](/assets/images/features/packages/export-packages-select-folder.gif)
*Select a folder to export*

Once a folder has been selected, the assets that will be exported to a package will be shown on screen for review. If it looks right, click **Next**.

![Export packages - review assets](/assets/images/features/packages/export-packages-review.png)
*Review the folder's assets to be exported*

The folder will be exported once **Next** has been clicked. Workato will proceed to generate a zip file to be downloaded. This zip file will contain all the assets related to the recipe for it to work when imported into another account.

![Export packages - export completed](/assets/images/features/packages/export-packages-complete.png)
*Folder has been successfully exported as a package and is ready for download*

# Importing packages
Upon clicking the Import/export option on the menu, you'll be brought into the packages page.

![Import export page](/assets/images/features/packages/import-export-buttons.png)
*Packages page with import and export functions*

To import a package, simply upload the zip file of the package containing the assets, and select a destination Workato folder to import these recipes into.

![Import packages - select destination folder](/assets/images/features/packages/import-packages-select-folder.gif)
*Select a destination folder to import your packages into*

Once a zip file has been uploaded, you will be able to preview the assets which will be imported into your Workato folder. For each asset, details about whether the asset will be created, or whether it would overwrite an existing asset (with the same name), is included in italics.

When importing a package for the first time, or when importing a package into a new folder, all assets will be created as below.

![Importing a new package or a package in an empty folder](/assets/images/features/packages/import-packages-create.png)
*Importing a new package or a package in an empty folder*

When importing a package for the second (or more) time into the same folder, as long as the assets have the same names, the imported assets will overwrite existing assets in the target folder, as below.

![Importing an existing/updated package into the same folder again](/assets/images/features/packages/import-packages-update.png)
*Importing an existing/updated package into the same folder again*

Once the package has been imported into your Workato account, the success screen shows up. You'll be able to find the recipes in the selected folder.

![Successfully importing a package](/assets/images/features/packages/import-packages-successful.png)
*Success screen for package import*

# Packages import behaviour
The following table details how an imported package's assets are moved into your Workato account.

| Dependency type | What Workato does when package is imported                                                                                                                                                   | Location        |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Recipes         | Overwrites recipe if a recipe with the same name exists in the folder. Creates new recipe if no recipe with the same name exists in the folder                                               | Selected folder |
| SDK connectors  | Overwrites existing SDK connector if connector with same name already exists in the Workato account. Creates new connector if no connector with the same name exists in the Workato account. | Developer       |
| Connections     | Creates a connection placeholder with no actual connection. This does nothing if a connection by the same name already exists.                                                               | Connections     |
| Lookup tables   | Creates a lookup table placeholder. Does nothing if a lookup table by the same name already exists.                                                                                          | Lookup table    |
| Properties      | Add properties to existing properties in the Workato account. Does nothing if a property with the same name already exists.                                                                  | Properties      |

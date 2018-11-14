---
title: Recipe development lifecycle
date: 2017-05-31 15:00:00 Z
---

# Recipe lifecycle management
Organizations typically plan, develop, test and deploy new integrations with a recipe development lifecycle. This may involve moving recipes from a development environment to a testing environment, or from a testing environment to a production/deployment environment.

On Workato, teams can move sets of recipes and their dependencies (e.g. connections, callable recipes, custom connectors) from one environment to another, via the use of this feature. This allows teams to maintain their integration recipes across their different teams' environments.

## Import/export
Users can export and import their recipes as packages. Here's a list of assets that are exported in a package:

- recipes in a chosen folder
- subfolders and recipes in those subfolders
- associated connections
- associated custom connectors
- associated callable recipes
- all account properties
- all lookup tables
- all shared schemas
- all message templates

With this feature, users can move these assets easily across different Workato accounts.

Importing and exporting are useful when teams are collaborating across different Workato accounts, for example, if the development team wishes to move recipes over to the QA team's Workato account, or to the production Workato account. Consultants can also utilize this feature to move comprehensive integrations into their clients' accounts.

The packages feature is enabled only for certain Workato plans. Check the [Pricing and plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

For Workato accounts with the recipe development lifcycle feature enabled, users will be able to see the option when they click on Tools > View all.

![RLM in tools gif](/assets/images/features/packages/navigate-to-recipelifecycle.gif)
*Recipe lifecycle management in Tools*

Upon clicking the option on the Tools page, you'll be brought into the Import/Export Feed. Here, you will find the buttons to export or import your packages as well as a list of all the past imports and exports done by team members.

![Import export feed](/assets/images/features/packages/import-export-feed.png)
*Feed showing all past imports and exports*

### Exporting packages
To begin exporting your recipes, ensure that all the recipes you wish to export are grouped together in a Workato folder. All associated connections, custom connectors and callable recipes will also be bundled into the package automatically. All account properties and lookup tables in that Workato account are also bundled into the package. Once the package is created, the user can download the package as a zip file.

In the example below, 2 recipes can be found in the **Customer Sync** folder. In these recipes, the user utilizes assets such as callable recipes and lookup tables.

To export a folder as a package, click on the **Export** button. You will be brought into an export wizard that guides you through exporting a recipe and its related assets.

![Export packages - select folder to export](/assets/images/features/packages/export-packages-select-folder2.png)
*Select a folder to export and define the lookup table export*

Select the folder to export. In the second dropdown, select whether lookup table data should be exported in the package. Selecting 'Yes' will allow all the lookup tables and their line data to be exported. If you leave the option as 'No', only the header row in the lookup table will be exported.

Please note that if a lookup table with the same name the same table already exists in your destination Workato account, the imported content will be added to the lookup table. There will be duplicate entries if the new, imported content matches the existing content. You should remove the lookup table or rename the existing lookup table in your destination account before importing the package to prevent unwanted duplication.

Once a folder has been selected, the assets that will be exported to a package will be shown on screen for review.

![Export packages - review assets](/assets/images/features/packages/export-packages-review2.png)
*Review the folder's assets to be exported*

If it looks right, click on **Next** to proceed.

The folder will be exported once **Next** has been clicked. Workato will generate a zip file to be downloaded. This zip file will contain all the assets related to the recipe for it to work when imported into another account.

![Export packages - export completed](/assets/images/features/packages/export-packages-complete2.png)
*Folder has been successfully exported as a package and is ready for download*

### Importing packages

To import a package, click on the 'Import' button on the Import/Export Feed. You will be brought to a wizard that will guide you through the import process.

![Import packages - select destination folder](/assets/images/features/packages/import-packages-select-folder2.png)
*Select a destination folder to import your packages into*

Find the package to upload from your computer and select a destination Workato folder to import these recipes into. You can also choose whether to import the content of lookup tables. Once a zip file has been uploaded, you will be able to preview the assets which will be imported into your Workato folder.

![Review import](/assets/images/features/packages/import-packages-preview2.png)
*Reviewing the assets to be imported*

For each asset, details about whether the asset will be created, or whether it would overwrite an existing asset (with the same name), is included in grey italics.

When importing a package for the first time, or when importing a package into a new folder, all assets will be created with 'Add' in italics. When importing a package for the second (or more) time into the same folder, as long as the assets have the same names, the imported assets will overwrite existing assets in the target folder and show 'Update' in italics.

Once the package has been imported into your Workato account, the success screen will appear. Click on 'View in folders' to see the imported recipes.

![Successfully importing a package](/assets/images/features/packages/import-packages-successful2.png)
*Success screen for package import*

## Packages import behaviour
The following table details how an imported package's assets are moved into your Workato account.

| Dependency type | What Workato does when package is imported                                                                                                                                                   | Location        |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Recipes         | **Overwrites** recipe if a recipe with the same name exists in the folder. <br> **Creates** new recipe if no recipe with the same name exists in the folder.                                               | Selected folder |
| Custom connectors  | Overwrites existing custom connector if connector with same name already exists in the Workato account. Creates new connector if no connector with the same name exists in the Workato account. | Developer       |
| Connections     | Creates a connection placeholder. The user should connect the application after importing. Nothing is done if a connection with the same name already exists.                                                               | Connections     |
| Lookup tables   | Creates a lookup table with the header rows. Imports the lookup table data if selected during export and import.                                                                                         | Lookup table    |
| Properties      | Adds properties to existing properties in the Workato account. Does nothing if a property with the same name already exists.                                                                  | Properties      |
| Shared schemas   | Adds the schema to existing shared schemas in the Workato account or updates it if a schema with the same name already exists.     | Schema reuse |
| Message templates | Adds the message template to existing templates in the Workato account or updates it if a template with the same name already exists. | Message templates |

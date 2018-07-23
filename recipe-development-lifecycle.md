---
title: Recipe development lifecycle
date: 2017-05-31 15:00:00 Z
---

# Recipe development lifecycle
Organizations typically plan, develop, test and deploy new integrations via their recipe development lifecycle. This may involve moving recipes from a development environment to a testing environment, or from a testing environment to a production/deployment environment.

On Workato, teams can move sets of recipes and their related assets (e.g. connections, custom connectors, lookup tables, callable recipes) from one environment to another, via the use of the recipe development lifecycle. This allows teams to maintain their integration recipes across their different teams' environments.

## Import/Export 
Users can export and import their recipes as packages. A package refers to a group of assets: recipes and the related dependencies needed for recipes to work, e.g. connections, custom connectors, lookup tables and shared schemas. With this feature, users can move these assets easily across different Workato accounts.

Importing and exporting are useful when teams are collaborating across different Workato accounts, for example, if the development team wishes to move recipes over to the QA team's Workato account, or to the production Workato account. Consultants can also utilize this feature to move comprehensive integrations into their clients' accounts.

The packages feature is enabled only for certain Workato plans. Check the [Pricing and plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

For Workato accounts with the recipe development lifcycle feature enabled, users will be able to see the option when they click on Tools > View all. 

![RLM in tools gif](/assets/images/features/packages/navigate-to-recipelifecycle.png)
*Recipe lifecycle management in Tools*

Upon clicking the option on the Tools page, you'll be brought into the Import/Export Feed.

![Import export feed](/assets/images/features/packages/import-export-feed.png)
*Feed showing all past imports and exports*

### Exporting packages
When you export a folder of recipes as a zip file, you will find:
- recipes in that folder
- subfolders and recipes in those subfolders
- associated connections
- associated custom connectors
- associated callable recipes
- all account properties
- all lookup tables
- all shared schemas
- all message templates

To begin exporting your recipes, ensure that all the recipes you wish to export are grouped together in a Workato folder. All associated connections, custom connectors and callable recipes will also be bundled into the package automatically. All account properties and lookup tables in that Workato account are also bundled into the package. Once the package is created, the user can download the package in a zip file.

In the example below, 2 recipes can be found in the **Customer Sync** folder. In these recipes, the user utilizes assets such as callable recipes and lookup tables.

To export a folder as a package, click on the **Export** button. Select the folder to export. In the second dropdown, select whether lookup table data should be exported in the package. Selecting 'Yes' will allow all the lookup tables and their line data to be exported. If you leave the option as 'No', only the header row in the lookup table will be exported.

![Export packages - select folder to export](/assets/images/features/packages/export-packages-select-folder2.png)
*Select a folder to export and define the lookup table export*

Once a folder has been selected, the assets that will be exported to a package will be shown on screen for review. If it looks right, click **Next**.

![Export packages - review assets](/assets/images/features/packages/export-packages-review2.png)
*Review the folder's assets to be exported*

The folder will be exported once **Next** has been clicked. Workato will generate a zip file to be downloaded. This zip file will contain all the assets related to the recipe for it to work when imported into another account.

![Export packages - export completed](/assets/images/features/packages/export-packages-complete2.png)
*Folder has been successfully exported as a package and is ready for download*

### Importing packages

To import a package, click on the 'Import' button on the Import/Export Feed. Find the package to upload in your computer and select a destination Workato folder to import these recipes into. You can also choose whether to import the content of lookup tables. 

![Import packages - select destination folder](/assets/images/features/packages/import-packages-select-folder2.png)
*Select a destination folder to import your packages into*

Once a zip file has been uploaded, you will be able to preview the assets which will be imported into your Workato folder. For each asset, details about whether the asset will be created, or whether it would overwrite an existing asset (with the same name), is included in italics.

When importing a package for the first time, or when importing a package into a new folder, all assets will be created with 'Add' in italics. When importing a package for the second (or more) time into the same folder, as long as the assets have the same names, the imported assets will overwrite existing assets in the target folder and show 'Update' in italics. 

![Review import](/assets/images/features/packages/import-packages-preview2.png)
*Reviewing the assets to be imported*

Once the package has been imported into your Workato account, the success screen shows up. Click on 'View in folders' to see the imported recipes. 

![Successfully importing a package](/assets/images/features/packages/import-packages-successful2.png)
*Success screen for package import*

## Packages import behaviour
The following table details how an imported package's assets are moved into your Workato account.

| Dependency type | What Workato does when package is imported                                                                                                                                                   | Location        |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Recipes         | Overwrites recipe if a recipe with the same name exists in the folder. Creates new recipe if no recipe with the same name exists in the folder.                                               | Selected folder |
| Custom connectors  | Overwrites existing custom connector if connector with same name already exists in the Workato account. Creates new connector if no connector with the same name exists in the Workato account. | Developer       |
| Connections     | Creates a connection placeholder. The user should connect the application after importing. Nothing is done if a connection with the same name already exists.                                                               | Connections     |
| Lookup tables   | Creates a lookup table with the header rows. Imports the lookup table data if selected during export and import.                                                                                         | Lookup table    |
| Properties      | Adds properties to existing properties in the Workato account. Does nothing if a property with the same name already exists.                                                                  | Properties      |
| Shared schemas   | Adds the schema to existing shared schemas in the Workato account or updates it if a schema with the same name already exists.     | Schema reuse |
| Message templates | Adds the message template to existing templates in the Workato account updates it if a template with the same name already exists. | Message templates |

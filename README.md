# Exoplanet Ranking

In this project, we aim to find an appropriate exoplanet (a planet in another solar system) that might be good enough for life. To deal with this issue, we use data about known exoplanets and AI techniques. The domain of this attempt is to provide an answer whether there is the planet in the universe similar to the Earth or not. To achieve the goal we compute the similarity rank for each exoplanet.

This Project was created as a data science project at University of Helsinki, 2019.

## Project Structure

* data - folder with dataset
  * dataset_original.csv - original dataset downloaded from NASA
  * data_clean.csv - dataset with removed link-columns
  * data_preprocess.csv - dataset used for ML
  * data_visualization.csv - dataset used for Web App
* pitch - folder with pith presentation
  * pitch.pdf - presentation
  * pitch.tex - latex source code
* preprocessing - folder for ML
  * preprocessing.ipynb - Jupyter Notebook with ML
  * output.csv - dataset with ranks
* report - folder for technical report
  * report.pdf - technical report
  * report.tex - source code of technical report
* website - Web App Folder

## Web App

The web is run in Node JS environment. Execute following to run the app, the website will be available at `localhost:3000`.
```
npm install
node index.js
```

## Authors

* **Nathan Goron** - *Visualizations* - <nathan.goron@helsinki.fi>
* **Franz Motzkus** - *Web App* - <franz.motzkus@helsinki.fi>
* **Tomáš Vopat** - *Machine Learning* - <tomas.vopat@helsinki.fi>

# Simple Linear Regression Tool (Proof of Concept)

This tool implements a simple linear regression algorithm as a proof of concept. It is designed to perform linear regression given a dataset and a target value, returning the predicted value, slope, and intercept.

## Formula Explanation

### Linear Regression Formula

The simple linear regression formula predicts the value of a dependent variable based on the value of an independent variable. It assumes a linear relationship between the variables and is represented by the equation:

 $ȳ = (1/n) Σ yi$

 $x̄ = (1/n) Σ xi$

 $m = Σ((xi - x̄) * (yi - ȳ)) / Σ((xi - x̄)^2)$

 $b = ȳ - m * x̄$

 $y = mx + b$
 

#### Variables Explanation:

- **Dependent Variable $( y )$**:
  - Represents the variable we aim to predict based on the independent variable $x$. It is often referred to as the predicted value.

- **Independent Variable $( x )$**:
  - Denotes the variable used to make predictions about the dependent variable $y$. It serves as the input to our model or predictor variable.

- **Slope $( m )$**:
  - Indicates the rate of change of the dependent variable $y$ concerning the independent variable $x$. It shows how much $y$ changes for a unit change in $x$.
  - A positive slope $m$ suggests a positive relationship between $x$ and $y$, while a negative slope suggests a negative relationship.

- **Intercept $( b )$**:
  - Represents the point where the regression line intersects the y-axis when $x = 0$. It indicates the value of $y$ when $x$ is zero and signifies the baseline value of $y$ when all other factors are zero.

## Demo

The tool takes a dataset consisting of pairs of $[ x, y ]$ values and a target value $x$. It performs simple linear regression on the dataset and returns the predicted value, slope, and intercept.

### Input

- `dataset`: A vector of $[x, y]$ pairs representing the dataset.
- `target`: The target value for which the prediction is to be made.

### Output

- Predicted value: The predicted value of the dependent variable $y$ for the given target value $x$.
- Slope: The slope of the regression line.
- Intercept: The intercept of the regression line.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to contribute, report issues, or suggest improvements.

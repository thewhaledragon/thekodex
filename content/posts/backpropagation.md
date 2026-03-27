---
title: "Backpropagation"
date: "2026-03-11"
tag: "Deep Learning"
excerpt: "In order to updates the weights and biases ..."
subtitle: "How to update the parameters of a neural network?"
coverImage: "blog_asset/b1_neuron.png"
---
### Introduction

- In order to updates the weights and biases of a neural network, we need to know by how much each of it need to be adjusted based on the loss the neural network is currently making while training on the dataset.

- This is done by using backpropagation.

```python
a = 10
print(a)
```

$$x = y + x$$

![Neural network diagram showing the flow of activations and gradients](blog_asset/b1_neuron.png)

### References

1. [https://cs231n.github.io/optimization-2/](https://cs231n.github.io/optimization-2/)

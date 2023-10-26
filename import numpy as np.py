import numpy as np
import matplotlib.pyplot as plt

# Шаг для значений угла theta
theta = np.linspace(0, 2*np.pi, 1000)

# Вычисление r(θ) для каждого значения theta
r = 2 / np.cos((1/3) * theta)

# Преобразование в прямоугольные координаты
x = r * np.cos(theta)
y = r * np.sin(theta)

# Построение графика
plt.figure(figsize=(8, 8))
plt.plot(x, y)
plt.title('Кривая в полярных координатах: r(θ) = 2/cos((1/3)θ)')
plt.grid(True)
plt.show()

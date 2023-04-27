import numpy as np

# Define the dataset with 10 instances and three features (x, y, z)
data = np.array([
[2.5,	  2.4],	
[0.5,     0.7],
[2.2,     2.9],
[1.9,     2.2],
[3.1,     3.0],
[2.3,     2.7],
[2.0,     1.6],
[1.0,     1.1],
[1.5,     1.6],
[1.1,     0.9]
])

print("Dataset:")
print(data)

# Step 1: Compute the mean of each feature
mean = np.mean(data, axis=0)

print("\nStep 1: Compute the mean of each feature")
print("Mean:")
print(mean)

# Step 2: Compute the covariance matrix
covariance_matrix = np.cov(data.T)

print("\nStep 2: Compute the covariance matrix")
print("Covariance Matrix:")
print(covariance_matrix)

# Step 3: Compute the eigenvectors and eigenvalues of the covariance matrix
eigenvalues, eigenvectors = np.linalg.eig(covariance_matrix)

print("\nStep 3: Compute the eigenvectors and eigenvalues of the covariance matrix")
print("Eigenvalues:")
print(eigenvalues)
print("Eigenvectors:")
print(eigenvectors)

# Step 4: Sort the eigenvectors by decreasing eigenvalues
eigen_pairs = [(np.abs(eigenvalues[i]), eigenvectors[:,i]) for i in range(len(eigenvalues))]
eigen_pairs.sort(key=lambda x: x[0], reverse=True)

sorted_eigenvectors = [eigen_pairs[i][1] for i in range(len(eigen_pairs))]

principal_components = np.array(sorted_eigenvectors)

print("\nStep 4: Sort the eigenvectors by decreasing eigenvalues")
print("Sorted Eigenvectors:")
print(sorted_eigenvectors)

# Print the principal components
print("\nPrincipal Components:")
print(principal_components)

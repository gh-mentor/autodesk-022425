# This bash script uses git to synchronize changes between the local and remote GitHub repository.

# steps:

# 1. stage all changes 
# 2. commit changes with message 'Updated'
# 3. pull changes from remote repository
# 4. push changes to remote repository on branch 'main'

# 1. stage all changes
git add .

# 2. commit changes with message 'Updated'
git commit -m "Updated"

# 3. pull changes from remote repository
git pull origin main

# 4. push changes to remote repository on branch 'main'
git push origin main

# Echo a message to the terminal
echo "Changes have been synchronized with the remote repository."
# go-link-server
A go-link server on nuxt with supabase hosted on cloudflare

# Project Setup Instructions

Ensure you have Homebrew installed on your Mac. If not, install it with the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Installation Steps

1. **Install pyenv and direnv:**
   Install `pyenv` and `direnv` using Homebrew:
   ```bash
   brew install pyenv direnv
   ```

2. **Set up pyenv:**
   Configure `pyenv` to use a specific Python version:
   ```bash
   pyenv install 3.9.5
   echo "3.9.5" > .python-version
   ```

3. **Enable direnv:**
   Append the direnv hook to your shell configuration and reload it:
   ```bash
   echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
   source ~/.zshrc
   ```

4. **Install Python dependencies:**
   Install the required Python packages using pip:
   ```bash
   pip install -r requirements.txt
   ```

5. **Install Node.js using nvm:**
   First, install nvm (Node Version Manager):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | zsh
   nvm install --lts
   ```

6. **Install npm packages:**
   Install required Node.js packages:
   ```bash
   npm install
   ```

## Start Developing!

After completing the above steps, your development environment should be set up and ready to use.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

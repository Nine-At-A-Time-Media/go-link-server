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
   ```

3. **Enable direnv:**
   ```bash
   direnv allow
   ```

4. **Install Python dependencies:**
   Install the required Python packages using pip:
   ```bash
   pip install -r requirements.txt
   ```

5. **Install Node.js using nvm:**
   First, install nvm (Node Version Manager) using brew
   ```bash
   brew install nvm  # follow any additional instructions it has
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

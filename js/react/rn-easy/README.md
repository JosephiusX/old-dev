# sec1 

        install node
        install git
        install vscode

to install chocolaty we need to check if our get-execution policy is restricted, if so we will need to bypass

        run 'Get-ExecutionPolicy'
            should say restricted

        if so run 'Set-ExecutionPolicy AllSigned' or 'Set-ExecutionPolicy Bypass -Scope Process' (in powershell as administrator)

install chocolatly:(package manager for windows) 

        install chocolatly : 
            Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

        test that it is downloaded
            choco -?

watchman:

        'choco install watchman' in admin powershell

expo cli:

        npm install --locatioin=global expo-cli
            to test run: expo whoami

install expo on my phone and make an account

        in command line
            expo init myfirstproject
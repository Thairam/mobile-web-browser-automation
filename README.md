## Projeto base para automação Web Browser Mobile 

### Executando os testes

> 1° Passo: Altere o arquivo de configurações `codecept.conf.js` com suas respectivas configurações

```javascript
Appium: {
  platform: 'Android',
  desiredCapabilities: {
    deviceName: 'pixel',
    platformVersion: '9',
    automationName: 'UiAutomator2',
    browserName: 'Chrome'
  }
}
```

> 2° Passo: Execute o appium

> 3° Passo: Inicie o emulador

> 4° Passo: Execute o comando:
```
npm run android
```
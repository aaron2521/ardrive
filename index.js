const {
  readJWKFile,
  arDriveFactory,
  wrapFileOrFolder,
  EID,
} = require('ardrive-core-js')

// Read wallet from file
const myWallet = readJWKFile('./wallet/file.json')

// Construct ArDrive class
const arDrive = arDriveFactory({ wallet: myWallet })

// Create a public drive and its root folder
// const createDriveResult = await arDrive.createPublicDrive({
//   driveName: 'My-Drive',
// })

async function createDive() {
  const createDriveResult = await arDrive.movePublicFile({
    fileId: '8188bc26-e7a6-43a7-ad97-d5fa6ffe028d',
    newParentFolderId: '63495591-fd56-4e12-b0f6-802ebcecc1f9',
  })
  // console.log(createDriveResult.created[0].entityId['entityId'])
  // console.log(createDriveResult.created[1].entityId['entityId'])

  console.log(createDriveResult)

  // uploadFile('90116e42-b13e-4a9a-8845-3ae4ccb8d830')
}

async function uploadFile(eID) {
  // Wrap file for upload
  const wrappedEntity = wrapFileOrFolder('./img/congrats_page.PNG')

  // Construct a safe Entity ID Type
  const destFolderId = EID(eID)
  const uploadFileResult = await arDrive.uploadAllEntities({
    entitiesToUpload: [{ wrappedEntity, destFolderId }],
  })
  console.log(uploadFileResult)
}

createDive()

// ba346247-547b-4e67-9e80-d14cf0ea8578
// c7664d68-efe4-4603-b995-8e37ae6163e1

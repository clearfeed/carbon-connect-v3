import React, { useState } from "react";
import {
  AutoSyncedSourceTypes,
  CarbonConnectProps,
  FilePickerMode,
  IntegrationName,
} from "../typing/shared";
import { ENV } from "./shared";

// const [showDataSourcesModal, toggleDataSourcesModal] = useState(true);

const tokenFetcher = async () => {
  const response = await fetch(
    "https://api.dev.carbon.ai/auth/v1/access_token",
    {
      method: "GET",
      headers: {
        "customer-id": "swapnil@carbon.ai",
        authorization:
          "Bearer bd393e801e24f93e7f231f427895539b0137d4c46d82c6f5aeb366181ad646cb",
      },
    }
  );
  if (response.status == 200) {
    const data = await response.json();
    return {
      access_token: data.access_token,
    };
  } else {
    return { access_token: "" };
  }
};

export const TEST_PROPS: CarbonConnectProps = {
  orgName: "Wikemedia",
  brandIcon:
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png",
  tokenFetcher: tokenFetcher,
  environment: ENV.DEVELOPMENT,
  tags: {
    appType: "chatbot",
    appVersion: "1.1.1",
    appDescription: "Chatbot for Rubber",
    // appId: '378476476985508433',
  },
  maxFileSize: 100000000,
  // maxItemsPerChunk={1}
  // allowMultipleFiles={false}
  // embeddingModel={EmbeddingGenerators.OPENAI_ADA_LARGE_1024}
  generateSparseVectors: false,
  prependFilenameToChunks: true,
  maxItemsPerChunk: 1,
  // entryPoint: IntegrationName.CONFLUENCE,
  // showFilesTab={false}
  setPageAsBoundary: false,
  useRequestIds: true,
  parsePdfTablesWithOcr: false,
  // primaryTextColor="black"
  sendDeletionWebhooks: true,
  // showFilesTab={false}
  // fileSyncConfig={{
  //   auto_synced_data_sources: [AutoSyncedSourceTypes.ARTICLE]
  // }}
  enabledIntegrations: [
    {
      id: IntegrationName.BOX,
      showFilesTab: true,
    },
    {
      id: IntegrationName.CONFLUENCE,
      syncFilesOnConnection: true,
    },
    {
      id: IntegrationName.DROPBOX,
      setPageAsBoundary: true,
    },
    {
      id: IntegrationName.GOOGLE_DRIVE,
      useOcr: true,
      fileSyncConfig: {
        detect_audio_language: true,
        split_rows: true,
      },
      useCarbonFilePicker: true,
    },
    {
      id: IntegrationName.INTERCOM,
      syncFilesOnConnection: true,
      fileSyncConfig: {
        auto_synced_source_types: [AutoSyncedSourceTypes.TICKET],
      },
      syncSourceItems: false,
    },
    {
      id: IntegrationName.LOCAL_FILES,
      chunkSize: 400,
      overlapSize: 20,
      // maxFileSize: 1000000000,
      allowMultipleFiles: true,
      maxFilesCount: 50,
      skipEmbeddingGeneration: false,
      prependFilenameToChunks: true,
      generateSparseVectors: false,
      maxItemsPerChunk: 2,
      setPageAsBoundary: true,
      filePickerMode: FilePickerMode.FILES,
      sendDeletionWebhooks: true,
      allowedFileTypes: [
        {
          extension: "csv",
          skipEmbeddingGeneration: true,
        },
        {
          extension: "txt",
        },
        {
          extension: "pdf",
          useOcr: true,
        },
        {
          extension: "HTML",
        },
      ],
    },
    {
      id: IntegrationName.NOTION,
    },
    {
      id: IntegrationName.ONEDRIVE,
    },
    {
      id: IntegrationName.SHAREPOINT,
    },
    {
      id: IntegrationName.WEB_SCRAPER,
      // enableAutoSync: true,
      chunkSize: 1100,
      recursionDepth: 0,
      // maxPagesToScrape: 500,
      // embeddingModel: "COHERE_MULTILINGUAL_V3",
      // cssClassesToSkip: ["some"],
      // htmlTagsToSkip: ["script"],
      generateSparseVectors: false,
      // sitemapEnabled: false,
    },
    {
      id: IntegrationName.ZENDESK,
      syncFilesOnConnection: true,
    },
    {
      id: IntegrationName.ZOTERO,
    },
    {
      id: IntegrationName.FRESHDESK,
      syncFilesOnConnection: true,
    },
    {
      id: IntegrationName.GITBOOK,
      syncFilesOnConnection: true,
      syncSourceItems: false,
    },
    {
      id: IntegrationName.GITHUB,
      syncFilesOnConnection: false,
      skipEmbeddingGeneration: false,
    },
    {
      id: IntegrationName.SALESFORCE,
      syncFilesOnConnection: false,
      setPageAsBoundary: true,
      useCarbonFilePicker: true,
    },
    {
      id: IntegrationName.GMAIL,
      syncFilesOnConnection: false,
      useCarbonFilePicker: true,
    },
    {
      id: IntegrationName.OUTLOOK,
      syncFilesOnConnection: false,
    },
    {
      id: IntegrationName.S3,
      syncFilesOnConnection: false,
    },
    {
      id: IntegrationName.SLACK,
    },
  ],
  onSuccess: (data: any) => {
    console.log("Data on Success: ", data);
  },
  onError: (error: any) => {
    console.log("Data on Error: ", error);
  },
  primaryBackgroundColor: "#525252",
  entryPoint: IntegrationName.WEB_SCRAPER,
  // navigateBackURL: "https://carbon.ai",
  open: true,
};

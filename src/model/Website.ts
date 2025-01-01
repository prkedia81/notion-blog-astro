import mongoose from "mongoose";
import type { Document } from "mongoose";

export interface IWebsite extends Document {
  userClerkId: string;
  websiteName: string;
  notionCredentials: {
    notionKey: string;
    blogsDbId: string;
    tagsDbId: string;
    authorsDbId: string;
    notionBotId: string;
  };
  websiteContent: {
    about: {
      websiteName: string;
      aboutWebsite: string;
      homepageLink: string;
      logoLink: string;
    };
    ctaLinks: {
      signUpText: string;
      signUpLink: string;
      signInText: string;
      signInLink: string;
    };
    contact: {
      contactPageLink: string;
      phoneNumber?: number;
      email1: string;
      email2: string;
    };
    legalLinks: {
      tnc: string;
      privacyPolicy: string;
      refundPolicy: string;
    };
    scripts: {
      script: string;
    }[];
  };
  url: {
    userDesiredUrl?: string;
    userFacingUrl?: string;
    userUrl?: string;
    cloudFrontUrl?: string;
  };
  s3Configurations: {
    bucketName: string;
    bucketRegion: string;
    bucketPath: string;
    s3Url: string;
  };
  cloudFrontConfigurations: {
    distributionId: string;
    distributionDomain: string;
    distributionArn: string;
    lastDeployedAt: string;
  };
  status:
    | "online"
    | "offline"
    | "deactivated"
    | "building"
    | "deploying"
    | "failed";
  createdAt: Date;
}

const websiteSchema = new mongoose.Schema<IWebsite>(
  {
    userClerkId: {
      type: String,
      required: true,
    },
    websiteName: {
      type: String,
      required: true,
    },
    notionCredentials: {
      notionKey: {
        type: String,
        default: "",
      },
      notionBotId: {
        type: String,
        default: "",
      },
      blogsDbId: {
        type: String,
        default: "",
      },
      tagsDbId: {
        type: String,
        default: "",
      },
      authorsDbId: {
        type: String,
        default: "",
      },
    },
    websiteContent: {
      about: {
        websiteName: {
          type: String,
          default: "",
        },
        aboutWebsite: {
          type: String,
          default: "",
        },
        homepageLink: {
          type: String,
          default: "",
        },
        logoLink: {
          type: String,
          default: "",
        },
      },
      ctaLinks: {
        signUpText: {
          type: String,
          default: "",
        },
        signUpLink: {
          type: String,
          default: "",
        },
        signInText: {
          type: String,
          default: "",
        },
        signInLink: {
          type: String,
          default: "",
        },
      },
      contact: {
        contactPageLink: {
          type: String,
          default: "",
        },
        phoneNumber: {
          type: Number,
        },
        email1: {
          type: String,
          default: "",
        },
        email2: {
          type: String,
          default: "",
        },
      },
      legalLinks: {
        tnc: {
          type: String,
          default: "",
        },
        privacyPolicy: {
          type: String,
          default: "",
        },
        refundPolicy: {
          type: String,
          default: "",
        },
      },
      scripts: {
        type: [
          {
            script: {
              type: String,
              default: "",
            },
          },
        ],
        default: [{ script: "" }],
      },
    },
    url: {
      userDesiredUrl: {
        type: String,
        default: "",
      },
      userFacingUrl: {
        type: String,
        default: "",
      },
      userUrl: {
        type: String,
        default: "",
      },
      cloudFrontUrl: {
        type: String,
        default: "",
      },
    },
    s3Configurations: {
      bucketName: {
        type: String,
        default: "",
      },
      bucketRegion: {
        type: String,
        default: "",
      },
      bucketPath: {
        type: String,
        default: "",
      },
      s3Url: {
        type: String,
        default: "",
      },
    },
    cloudFrontConfigurations: {
      distributionId: {
        type: String,
        default: "",
      },
      distributionDomain: {
        type: String,
        default: "",
      },
      distributionArn: {
        type: String,
        default: "",
      },
      lastDeployedAt: {
        type: String,
        default: "",
      },
    },
    status: {
      type: String,
      default: "offline",
      enum: [
        "online",
        "offline",
        "deactivated",
        "building",
        "deploying",
        "failed",
      ],
    },
  },
  { timestamps: true }
);

const Website =
  mongoose.models.Website || mongoose.model<IWebsite>("Website", websiteSchema);

export default Website;

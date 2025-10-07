import type { AnyEntryMap, CollectionEntry } from "astro:content";

export const zennCollection: CollectionEntry<keyof AnyEntryMap>[] = [
  {
    id: "https://zenn.dev/mitate_gengaku/articles/vitest-temporarily-disbale",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        '[vitest]: 一時的にモックしたコンポーネントを無効化するメモ\nモックしたコンポーネントのテストカバレッジが表示されなくなったので一時的にモックを解除する方法を調べたときのメモ\n\n モック化の解除\nこんな感じで単純なコンポーネントのモックを作成したとする。\n\nモックをまとめたファイル.tsx\nvi.mock("@/components/Common/section", () => ({\n  Section: ({ ...props }) => <div data-testid="section" {...props} />,\n}));\n\n下記のように書け...',
      id: "https://zenn.dev/mitate_gengaku/articles/vitest-temporarily-disbale",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--bbJEGAXw--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255Bvitest%255D%253A%2520%25E4%25B8%2580%25E6%2599%2582%25E7%259A%2584%25E3%2581%25AB%25E3%2583%25A2%25E3%2583%2583%25E3%2582%25AF%25E3%2581%2597%25E3%2581%259F%25E3%2582%25B3%25E3%2583%25B3%25E3%2583%259D%25E3%2583%25BC%25E3%2583%258D%25E3%2583%25B3%25E3%2583%2588%25E3%2582%2592%25E7%2584%25A1%25E5%258A%25B9%25E5%258C%2596%25E3%2581%2599%25E3%2582%258B%25E3%2583%25A1%25E3%2583%25A2%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-10-04T13:00:01.000Z",
      title: "[vitest]: 一時的にモックしたコンポーネントを無効化するメモ",
      updated: "2025-10-04T13:00:01.000Z",
      url: "https://zenn.dev/mitate_gengaku/articles/vitest-temporarily-disbale",
    },
    rendered: {
      html: '[vitest]: 一時的にモックしたコンポーネントを無効化するメモ\nモックしたコンポーネントのテストカバレッジが表示されなくなったので一時的にモックを解除する方法を調べたときのメモ\n\n モック化の解除\nこんな感じで単純なコンポーネントのモックを作成したとする。\n\nモックをまとめたファイル.tsx\nvi.mock("@/components/Common/section", () => ({\n  Section: ({ ...props }) => <div data-testid="section" {...props} />,\n}));\n\n下記のように書け...',
    },
    collection: "zenn",
  },
  {
    id: "https://zenn.dev/mitate_gengaku/articles/aws-unable-to-list-objects-in-s3-bucket",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        "[AWS] [凡ミス]: Failed to get existing workspaces: Unable to list objects in S3 bucket ~\nGithub ActionsでTerraformを実行した時に下記のようなエラーが発生し、その結果が恥ずかしい凡ミスだったため、反省の意味も込めてメモ\n\n 発生した状況やエラー文\n\nAWS・Github間のOIDCを作成し認証が通ることを確認した\n検証のためにS3FullAccessを付けていた\nGithub Actions内で実行している\ntfstateを管理するのにS3バックエンドを使用している\n\nGithub...",
      id: "https://zenn.dev/mitate_gengaku/articles/aws-unable-to-list-objects-in-s3-bucket",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--q1qm1Wte--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255B%25E5%2587%25A1%25E3%2583%259F%25E3%2582%25B9%255D%253A%2520Failed%2520to%2520get%2520existing%2520workspaces%253A%2520Unable%2520to%2520list%2520...%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-09-26T02:00:00.000Z",
      title:
        "[凡ミス]: Failed to get existing workspaces: Unable to list objects ~の原因",
      updated: "2025-09-26T02:00:00.000Z",
      url: "https://zenn.dev/mitate_gengaku/articles/aws-unable-to-list-objects-in-s3-bucket",
    },
    rendered: {
      html: "[AWS] [凡ミス]: Failed to get existing workspaces: Unable to list objects in S3 bucket ~\nGithub ActionsでTerraformを実行した時に下記のようなエラーが発生し、その結果が恥ずかしい凡ミスだったため、反省の意味も込めてメモ\n\n 発生した状況やエラー文\n\nAWS・Github間のOIDCを作成し認証が通ることを確認した\n検証のためにS3FullAccessを付けていた\nGithub Actions内で実行している\ntfstateを管理するのにS3バックエンドを使用している\n\nGithub...",
    },
    collection: "zenn",
  },
  {
    id: "https://zenn.dev/mitate_gengaku/articles/terraform-aws-oidc",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        '[Terraform]: TerraformでAWSとGithub間のOIDCを作成するメモ\n前回の記事の内容をTerraformで構築するメモ\n\n\n IDプロバイダーの作成\n記事の1.IDプロバイダーの作成の部分\n\n 各オプション\nurl\n\nプロバイダのURL\n\nclient_id_list\n\nOpenID Connectプロバイダーに登録されているアプリケーションを識別する値\n\nresource "aws_iam_openid_connect_provider" "oidc" {\n  url            = "https://token.actions.githubus...',
      id: "https://zenn.dev/mitate_gengaku/articles/terraform-aws-oidc",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--O88w5fTP--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255BTerraform%255D%253A%2520Terraform%25E3%2581%25A7AWS%25E3%2581%25A8Github%25E9%2596%2593%25E3%2581%25AEOIDC%25E3%2582%2592%25E4%25BD%259C%25E6%2588%2590%25E3%2581%2599%25E3%2582%258B%25E3%2583%25A1%25E3%2583%25A2%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-09-22T13:00:05.000Z",
      title: "[Terraform]: TerraformでAWSとGithub間のOIDCを作成するメモ",
      updated: "2025-09-22T13:00:05.000Z",
      url: "https://zenn.dev/mitate_gengaku/articles/terraform-aws-oidc",
    },
    rendered: {
      html: '[Terraform]: TerraformでAWSとGithub間のOIDCを作成するメモ\n前回の記事の内容をTerraformで構築するメモ\n\n\n IDプロバイダーの作成\n記事の1.IDプロバイダーの作成の部分\n\n 各オプション\nurl\n\nプロバイダのURL\n\nclient_id_list\n\nOpenID Connectプロバイダーに登録されているアプリケーションを識別する値\n\nresource "aws_iam_openid_connect_provider" "oidc" {\n  url            = "https://token.actions.githubus...',
    },
    collection: "zenn",
  },
  {
    id: "https://zenn.dev/mitate_gengaku/articles/aws-github-oidc-re",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        "[re]: OIDCを作成してAWSとGithub間でアクセスを可能にする\nOpenID Connectを使用することでアクセスキーをGithubに保存する必要がなくなり、セキュリティの向上が図れる。\nまたキーのローテーションも不要になる。\n\n 手順\n\n 1. IDプロバイダーの作成\n\nプロバイダURLにhttps://token.actions.githubusercontent.com\n\n対象者にsts.amazonaws.com\n\n\n\n\n 2. ロールとポリシーの作成\nエンティティタイプはウェブアイデンティティを選び下記のように入力\nアイデンティティプロバイダー\ntoken.a...",
      id: "https://zenn.dev/mitate_gengaku/articles/aws-github-oidc-re",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--JJYDoAcW--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255Bre%255D%253A%2520OIDC%25E3%2582%2592%25E4%25BD%259C%25E6%2588%2590%25E3%2581%2597%25E3%2581%25A6AWS%25E3%2581%25A8Github%25E9%2596%2593%25E3%2581%25A7%25E3%2582%25A2%25E3%2582%25AF%25E3%2582%25BB%25E3%2582%25B9%25E3%2582%2592%25E5%258F%25AF%25E8%2583%25BD%25E3%2581%25AB%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-09-21T13:00:01.000Z",
      title: "[re]: OIDCを作成してAWSとGithub間でアクセスを可能にする",
      updated: "2025-09-21T13:00:01.000Z",
      url: "https://zenn.dev/mitate_gengaku/articles/aws-github-oidc-re",
    },
    rendered: {
      html: "[re]: OIDCを作成してAWSとGithub間でアクセスを可能にする\nOpenID Connectを使用することでアクセスキーをGithubに保存する必要がなくなり、セキュリティの向上が図れる。\nまたキーのローテーションも不要になる。\n\n 手順\n\n 1. IDプロバイダーの作成\n\nプロバイダURLにhttps://token.actions.githubusercontent.com\n\n対象者にsts.amazonaws.com\n\n\n\n\n 2. ロールとポリシーの作成\nエンティティタイプはウェブアイデンティティを選び下記のように入力\nアイデンティティプロバイダー\ntoken.a...",
    },
    collection: "zenn",
  },
  {
    id: "https://zenn.dev/mitate_gengaku/articles/astro-rss-feed-subscription",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        "[Astro]: AstroでZennの記事をRSSフィードから取得する\nAstroで自分のZennの記事を取得して表示するセクションを実装したのでRSSフィードを購読する実装のメモ\n\n RSSフィードとは\n\n RSSフィード\n\nサイトの更新情報など配信されている更新情報データのこと？\nURLを登録することで最新情報を取得できる\n\n\n RSS\n\nXMLベースのデータ形式形式\nサイトの目次や更新案内、最新情報などを配信する役割\nRSSリーダーで読み込む -> 購読\n\n一言でまとめると\n\n\n\n単語\n一言\n\n\n\n\nRSS\nXMLをベースとしたデータ形式\n\n\nRSSフィード\nRSS形式...",
      id: "https://zenn.dev/mitate_gengaku/articles/astro-rss-feed-subscription",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--okArK4uK--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255BAstro%255D%253A%2520Astro%25E3%2581%25A7Zenn%25E3%2581%25AE%25E8%25A8%2598%25E4%25BA%258B%25E3%2582%2592RSS%25E3%2583%2595%25E3%2582%25A3%25E3%2583%25BC%25E3%2583%2589%25E3%2581%258B%25E3%2582%2589%25E5%258F%2596%25E5%25BE%2597%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-09-17T13:00:01.000Z",
      title: "[Astro]: AstroでZennの記事をRSSフィードから取得する",
      updated: "2025-09-17T13:00:01.000Z",
      url: "https://zenn.dev/mitate_gengaku/articles/astro-rss-feed-subscription",
    },
    rendered: {
      html: "[Astro]: AstroでZennの記事をRSSフィードから取得する\nAstroで自分のZennの記事を取得して表示するセクションを実装したのでRSSフィードを購読する実装のメモ\n\n RSSフィードとは\n\n RSSフィード\n\nサイトの更新情報など配信されている更新情報データのこと？\nURLを登録することで最新情報を取得できる\n\n\n RSS\n\nXMLベースのデータ形式形式\nサイトの目次や更新案内、最新情報などを配信する役割\nRSSリーダーで読み込む -> 購読\n\n一言でまとめると\n\n\n\n単語\n一言\n\n\n\n\nRSS\nXMLをベースとしたデータ形式\n\n\nRSSフィード\nRSS形式...",
    },
    collection: "zenn",
  },
  {
    id: "https://zenn.dev/mitate_gengaku/articles/git-temporary-failure-in-name-resolution-error",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        "[Github]: Temporary failure in name resolutionエラーの直すメモ\nGithubにSSH接続する設定(公開鍵を登録)した後、git pushしたら「Temporary failure in name resolution」というエラーが出たのでその時のメモ\n!\nエラーの原因を突き止めるまでに直ってしまったので原因は完全にはわかっていません\n\n\n エラー文\nエラー文を見るにDNS関連のエラーではないかと推測\nssh: Could not resolve hostname github.com: Temporary failure in name...",
      id: "https://zenn.dev/mitate_gengaku/articles/git-temporary-failure-in-name-resolution-error",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--WjYV9GjZ--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255BGithub%255D%253A%2520Temporary%2520failure%2520in%2520name%2520resolution%25E3%2582%25A8%25E3%2583%25A9%25E3%2583%25BC%25E3%2581%25AE%25E7%259B%25B4%25E3%2581%2599%25E3%2583%25A1%25E3%2583%25A2%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-09-11T13:00:00.000Z",
      title: "[Github]: Temporary failure in name resolutionエラーの直すメモ",
      updated: "2025-09-11T13:00:00.000Z",
      url: "https://zenn.dev/mitate_gengaku/articles/git-temporary-failure-in-name-resolution-error",
    },
    rendered: {
      html: "[Github]: Temporary failure in name resolutionエラーの直すメモ\nGithubにSSH接続する設定(公開鍵を登録)した後、git pushしたら「Temporary failure in name resolution」というエラーが出たのでその時のメモ\n!\nエラーの原因を突き止めるまでに直ってしまったので原因は完全にはわかっていません\n\n\n エラー文\nエラー文を見るにDNS関連のエラーではないかと推測\nssh: Could not resolve hostname github.com: Temporary failure in name...",
    },
    collection: "zenn",
  },
  {
    id: "https://zenn.dev/mitate_gengaku/articles/git-temporary-failure-in-name-resolution-error",
    data: {
      authors: [
        {
          name: "御楯玄嶽",
          email: null,
          url: null,
        },
      ],
      categories: [],
      content: null,
      description:
        "[Github]: Temporary failure in name resolutionエラーの直すメモ\nGithubにSSH接続する設定(公開鍵を登録)した後、git pushしたら「Temporary failure in name resolution」というエラーが出たのでその時のメモ\n!\nエラーの原因を突き止めるまでに直ってしまったので原因は完全にはわかっていません\n\n\n エラー文\nエラー文を見るにDNS関連のエラーではないかと推測\nssh: Could not resolve hostname github.com: Temporary failure in name...",
      id: "https://zenn.dev/mitate_gengaku/articles/git-temporary-failure-in-name-resolution-error",
      image: null,
      media: [
        {
          url: "https://res.cloudinary.com/zenn/image/upload/s--WjYV9GjZ--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%255BGithub%255D%253A%2520Temporary%2520failure%2520in%2520name%2520resolution%25E3%2582%25A8%25E3%2583%25A9%25E3%2583%25BC%25E3%2581%25AE%25E7%259B%25B4%25E3%2581%2599%25E3%2583%25A1%25E3%2583%25A2%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E5%25BE%25A1%25E6%25A5%25AF%25E7%258E%2584%25E5%25B6%25BD%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tQOVRYWHQ5Qm1BLVplcURoLWdxUHl4RVFjMmNsRkhSNk95XzVVSVVhPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png?_a=BACAGSGT",
          image: null,
          title: null,
          length: 0,
          type: "false",
          mimeType: "false",
        },
      ],
      published: "2025-09-11T13:00:00.000Z",
      title: "[Github]: Temporary failure in name resolutionエラーの直すメモ",
      updated: "2025-09-11T13:00:00.000Z",
      url: null,
    },
    rendered: {
      html: "[Github]: Temporary failure in name resolutionエラーの直すメモ\nGithubにSSH接続する設定(公開鍵を登録)した後、git pushしたら「Temporary failure in name resolution」というエラーが出たのでその時のメモ\n!\nエラーの原因を突き止めるまでに直ってしまったので原因は完全にはわかっていません\n\n\n エラー文\nエラー文を見るにDNS関連のエラーではないかと推測\nssh: Could not resolve hostname github.com: Temporary failure in name...",
    },
    collection: "zenn",
  },
];

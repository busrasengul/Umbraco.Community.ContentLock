//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v15.2.2+c198e19
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Umbraco.Cms.Web.Common.PublishedModels
{
	/// <summary>Home</summary>
	[PublishedModel("home")]
	public partial class Home : PublishedContentModel, IContentControls, IFooterControls, IHeaderControls, IMainImageControls, ISEocontrols
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		public new const string ModelTypeAlias = "home";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public new static IPublishedContentType GetModelContentType(IPublishedContentTypeCache contentTypeCache)
			=> PublishedModelUtility.GetModelContentType(contentTypeCache, ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedContentTypeCache contentTypeCache, Expression<Func<Home, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(contentTypeCache), selector);
#pragma warning restore 0109

		private IPublishedValueFallback _publishedValueFallback;

		// ctor
		public Home(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
			: base(content, publishedValueFallback)
		{
			_publishedValueFallback = publishedValueFallback;
		}

		// properties

		///<summary>
		/// Content Rows: Add the rows of content for the page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("contentRows")]
		public virtual global::Umbraco.Cms.Core.Models.Blocks.BlockListModel ContentRows => global::Umbraco.Cms.Web.Common.PublishedModels.ContentControls.GetContentRows(this, _publishedValueFallback);

		///<summary>
		/// Social Icon Links: Add any social links using the SVG icons
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("socialIconLinks")]
		public virtual global::Umbraco.Cms.Core.Models.Blocks.BlockListModel SocialIconLinks => global::Umbraco.Cms.Web.Common.PublishedModels.FooterControls.GetSocialIconLinks(this, _publishedValueFallback);

		///<summary>
		/// Subtitle: Enter a subtitle for this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("subtitle")]
		public virtual string Subtitle => global::Umbraco.Cms.Web.Common.PublishedModels.HeaderControls.GetSubtitle(this, _publishedValueFallback);

		///<summary>
		/// Title: Enter the title for the page. If this is empty the name of the page will be used.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("title")]
		public virtual string Title => global::Umbraco.Cms.Web.Common.PublishedModels.HeaderControls.GetTitle(this, _publishedValueFallback);

		///<summary>
		/// Main Image: Choose the main image for this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("mainImage")]
		public virtual global::Umbraco.Cms.Core.Models.MediaWithCrops MainImage => global::Umbraco.Cms.Web.Common.PublishedModels.MainImageControls.GetMainImage(this, _publishedValueFallback);

		///<summary>
		/// Is Followable: Set this to true if you want the page to be followable by robots
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[ImplementPropertyType("isFollowable")]
		public virtual bool IsFollowable => global::Umbraco.Cms.Web.Common.PublishedModels.SEocontrols.GetIsFollowable(this, _publishedValueFallback);

		///<summary>
		/// Is Indexable: Set this to true if you want this page to be indexable by robots
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[ImplementPropertyType("isIndexable")]
		public virtual bool IsIndexable => global::Umbraco.Cms.Web.Common.PublishedModels.SEocontrols.GetIsIndexable(this, _publishedValueFallback);

		///<summary>
		/// Meta Description: Enter the meta description for this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaDescription")]
		public virtual string MetaDescription => global::Umbraco.Cms.Web.Common.PublishedModels.SEocontrols.GetMetaDescription(this, _publishedValueFallback);

		///<summary>
		/// Meta Keywords: Enter the keywords for this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaKeywords")]
		public virtual global::System.Collections.Generic.IEnumerable<string> MetaKeywords => global::Umbraco.Cms.Web.Common.PublishedModels.SEocontrols.GetMetaKeywords(this, _publishedValueFallback);

		///<summary>
		/// Meta Name: Enter the meta name for this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.2.2+c198e19")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaName")]
		public virtual string MetaName => global::Umbraco.Cms.Web.Common.PublishedModels.SEocontrols.GetMetaName(this, _publishedValueFallback);
	}
}
